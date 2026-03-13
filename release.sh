#!/bin/bash
# ============================================================
# release.sh — Automatiza o release do FocusWind para macOS
# Uso: ./release.sh <versão>   (ex: ./release.sh 0.1.2)
# ============================================================

set -e

VERSION="$1"

if [ -z "$VERSION" ]; then
  echo "❌ Uso: ./release.sh <versão>"
  echo "   Exemplo: ./release.sh 0.1.2"
  exit 1
fi

TAG="v${VERSION}"
DMG_PATH="downloads/FocusWind.dmg"
HTML_FILE="download.html"
REPO="pauloborini/focuswindlanding"

# 1. Verifica se o DMG existe
if [ ! -f "$DMG_PATH" ]; then
  echo "❌ Arquivo não encontrado: $DMG_PATH"
  echo "   Copie o build do macOS para a pasta downloads/ antes de rodar este script."
  exit 1
fi

# 2. Verifica se o gh CLI está instalado
if ! command -v gh &> /dev/null; then
  echo "❌ GitHub CLI (gh) não encontrado. Instale com: brew install gh"
  exit 1
fi

echo "🚀 Iniciando release FocusWind ${TAG}..."
echo ""

# 3. Deleta a release anterior (se existir)
echo "🗑️  Removendo release anterior (se houver)..."
gh release delete "${TAG}" -y --cleanup-tag 2>/dev/null || echo "   Nenhuma release ${TAG} anterior encontrada, seguindo..."

# Deleta qualquer outra release existente (mantém limpo, apenas a última versão)
EXISTING_TAGS=$(gh release list --json tagName -q '.[].tagName' 2>/dev/null || true)
if [ -n "$EXISTING_TAGS" ]; then
  for OLD_TAG in $EXISTING_TAGS; do
    if [ "$OLD_TAG" != "$TAG" ]; then
      echo "   Removendo release antiga: ${OLD_TAG}..."
      gh release delete "$OLD_TAG" -y --cleanup-tag 2>/dev/null || true
    fi
  done
fi

echo "✅ Releases antigas limpas."
echo ""

# 4. Cria a nova release com upload do DMG
echo "📦 Criando release ${TAG} e fazendo upload do DMG..."
gh release create "${TAG}" "$DMG_PATH" \
  --title "FocusWind ${TAG}" \
  --notes "Instalador do FocusWind para macOS (${TAG})."

echo "✅ Release criada com sucesso!"
echo ""

# 5. Atualiza o link no download.html
echo "🔗 Atualizando link no ${HTML_FILE}..."
sed -i '' "s|releases/download/v[0-9]*\.[0-9]*\.[0-9]*/FocusWind.dmg|releases/download/${TAG}/FocusWind.dmg|g" "$HTML_FILE"

echo "✅ Link atualizado para: releases/download/${TAG}/FocusWind.dmg"
echo ""

# 6. Commit e push
echo "📤 Fazendo commit e push..."
git add "$HTML_FILE"
git commit -m "release(mac): atualiza instalador dmg para ${TAG}"
git push

echo ""
echo "🎉 Release ${TAG} concluída com sucesso!"
echo "   📎 https://github.com/${REPO}/releases/tag/${TAG}"
