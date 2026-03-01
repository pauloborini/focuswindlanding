document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        pt: {
            "page.title": "FocusWind | O timer Pomodoro definitivo",
            "page.terms.title": "FocusWind | Termos de Uso",
            "page.privacy.title": "FocusWind | Política de Privacidade",
            "lang.label": "Idioma",
            "nav.problem": "O Problema",
            "nav.features": "Recursos",
            "nav.pricing": "Planos",
            "nav.faq": "FAQ",
            "nav.cta": "Baixar Agora",
            "drawer.menu": "Menu",
            "drawer.close": "Fechar menu",
            "drawer.cta": "Baixar Agora",
            "hero.tagline": "Foco inabalável. Produtividade sem distrações.",
            "hero.title": "O timer Pomodoro definitivo para profissionais de alta performance.",
            "hero.sub": "Uma ferramenta multiplataforma focada no essencial. Sincronização perfeita entre desktop e mobile, desenhada para manter você no estado de fluxo sem as interrupções de interfaces complexas.",
            "hero.cta.primary": "Conhecer o Premium",
            "hero.cta.secondary": "Baixar Grátis",
            "problem.title": "Recupere o controle sobre as suas horas produtivas.",
            "problem.p1": "A constante troca de contexto e as notificações contínuas fragmentam a atenção. Aplicativos de produtividade convencionais frequentemente adicionam mais ruído do que clareza ao fluxo de trabalho.",
            "problem.p2": "O FocusWind foi construído com base em um princípio simples: a ferramenta não deve competir pela sua atenção.",
            "features.title": "Desenvolvido para sustentar o seu estado de Flow.",
            "features.subtitle": "Uma interface minimalista que fornece exatamente o que você precisa.",
            "feature.1.title": "Metodologia Integrada",
            "feature.1.desc": "Ciclos de trabalho baseados em períodos de foco intenso e descansos estratégicos, otimizando a energia mental.",
            "feature.2.title": "Desempenho",
            "feature.2.desc": "Histórico detalhado e estatísticas de progresso diário diretamente na tela inicial para controle de metas.",
            "feature.3.title": "Modo Standby",
            "feature.3.desc": "Interface de tela cheia no mobile que bloqueia distrações e força a manutenção do foco.",
            "feature.4.title": "Modo Compacto",
            "feature.4.desc": "Mini-timer flutuante e discreto para desktop. Monitore seu tempo sem alterar janelas.",
            "feature.5.title": "Sincronização em Tempo Real",
            "feature.5.desc": "Inicie um ciclo no computador e acompanhe pelo celular. Experiência contínua em todos os dispositivos.",
            "badge.premium": "Premium",
            "pricing.title": "Alta performance com um modelo justo.",
            "pricing.subtitle": "Estrutura de custos pensada para garantir o desenvolvimento contínuo.",
            "plan.free.title": "Focuswind Free",
            "plan.free.subtitle": "Para estabelecer os primeiros hábitos.",
            "plan.free.price": "Grátis",
            "plan.free.feature1": "Timer Pomodoro Completo",
            "plan.free.feature2": "Resumo Diário de Produtividade",
            "plan.free.feature3": "Acesso em 1 dispositivo",
            "plan.free.cta": "Iniciar Grátis",
            "plan.premium.title": "Focuswind Premium",
            "plan.premium.subtitle": "Para quem exige o máximo do fluxo.",
            "plan.premium.price": "R$ 7,90 / mês",
            "plan.premium.feature1": "Todas as funcionalidades Free",
            "plan.premium.feature2": "Sincronização na nuvem",
            "plan.premium.feature3": "Modo Compacto (Desktop)",
            "plan.premium.feature4": "Modo Standby (Mobile)",
            "plan.premium.feature5": "Histórico completo",
            "plan.premium.cta": "Assinar Premium",
            "plan.annual.title": "Focuswind Premium Anual",
            "plan.annual.subtitle": "Economia máxima em um único pagamento.",
            "plan.annual.price": "R$ 79,90 / ano",
            "plan.annual.feature1": "Todas as funcionalidades Free",
            "plan.annual.feature2": "Sincronização na nuvem",
            "plan.annual.feature3": "Modo Compacto (Desktop)",
            "plan.annual.feature4": "Modo Standby (Mobile)",
            "plan.annual.feature5": "Histórico completo",
            "plan.annual.cta": "Assinar Anual",
            "faq.title": "Perguntas Frequentes",
            "faq.q1": "Existe algum período de fidelidade na assinatura?",
            "faq.a1": "Não. A assinatura do plano Premium é gerenciada de forma centralizada pelo nosso portal web seguro, permitindo o cancelamento a qualquer momento sem processos burocráticos.",
            "faq.q2": "O aplicativo requer conexão constante com a internet?",
            "faq.a2": "Apenas para a sincronização de dados. O controle de ciclos e a utilização do timer Pomodoro funcionam nativamente offline, atualizando seu histórico assim que a conexão for reestabelecida.",
            "faq.q3": "Em quais plataformas o Focuswind está disponível?",
            "faq.a3": "Atualmente, oferecemos suporte nativo e otimizado para o ecossistema macOS, iOS e Android.",
            "footer.title": "Eleve o padrão do seu fluxo de trabalho.",
            "footer.subtitle": "Pare de utilizar ferramentas que competem pela sua atenção.",
            "footer.rights": "© 2026 FocusWind. Todos os direitos reservados.",
            "footer.terms": "Termos de Uso",
            "footer.privacy": "Política de Privacidade",
            "legal.tagline": "Documentação Legal",
            "legal.terms.title": "Termos de Uso",
            "legal.privacy.title": "Política de Privacidade",
            "legal.subtitle": "Versão provisória. Conteúdo definitivo será inserido em breve.",
            "legal.loading": "Carregando documento...",
            "legal.error": "Não foi possível carregar o documento."
        },
        en: {
            "page.title": "FocusWind | The definitive Pomodoro timer",
            "page.terms.title": "FocusWind | Terms of Use",
            "page.privacy.title": "FocusWind | Privacy Policy",
            "lang.label": "Language",
            "nav.problem": "The Problem",
            "nav.features": "Features",
            "nav.pricing": "Pricing",
            "nav.faq": "FAQ",
            "nav.cta": "Download Now",
            "drawer.menu": "Menu",
            "drawer.close": "Close menu",
            "drawer.cta": "Download Now",
            "hero.tagline": "Unshakable focus. Productivity without distractions.",
            "hero.title": "The definitive Pomodoro timer for high-performance professionals.",
            "hero.sub": "A cross-platform tool focused on essentials. Seamless sync between desktop and mobile, designed to keep you in flow without the interruptions of complex interfaces.",
            "hero.cta.primary": "Explore Premium",
            "hero.cta.secondary": "Download Free",
            "problem.title": "Regain control of your productive hours.",
            "problem.p1": "Constant context switching and continuous notifications fragment attention. Conventional productivity apps often add more noise than clarity to the workflow.",
            "problem.p2": "FocusWind was built on a simple principle: the tool should never compete for your attention.",
            "features.title": "Built to sustain your flow state.",
            "features.subtitle": "A minimalist interface that delivers exactly what you need.",
            "feature.1.title": "Integrated Methodology",
            "feature.1.desc": "Work cycles based on intense focus and strategic breaks, optimizing mental energy.",
            "feature.2.title": "Performance",
            "feature.2.desc": "Detailed history and daily progress stats on the home screen for quick goal tracking.",
            "feature.3.title": "Standby Mode",
            "feature.3.desc": "Full-screen mobile interface that blocks distractions and reinforces focus.",
            "feature.4.title": "Compact Mode",
            "feature.4.desc": "A discreet floating mini-timer for desktop. Track time without switching windows.",
            "feature.5.title": "Real-Time Sync",
            "feature.5.desc": "Start a cycle on desktop and follow it on mobile. A continuous experience across devices.",
            "badge.premium": "Premium",
            "pricing.title": "High performance with a fair model.",
            "pricing.subtitle": "A cost structure designed to sustain continuous development.",
            "plan.free.title": "Focuswind Free",
            "plan.free.subtitle": "To establish your first focus habits.",
            "plan.free.price": "Free",
            "plan.free.feature1": "Full Pomodoro Timer",
            "plan.free.feature2": "Daily Productivity Summary",
            "plan.free.feature3": "Access on 1 device",
            "plan.free.cta": "Start Free",
            "plan.premium.title": "Focuswind Premium",
            "plan.premium.subtitle": "For those who demand the most from their flow.",
            "plan.premium.price": "R$ 7.90 / month",
            "plan.premium.feature1": "All Free features",
            "plan.premium.feature2": "Cloud sync",
            "plan.premium.feature3": "Compact Mode (Desktop)",
            "plan.premium.feature4": "Standby Mode (Mobile)",
            "plan.premium.feature5": "Full history",
            "plan.premium.cta": "Go Premium",
            "plan.annual.title": "Focuswind Premium Annual",
            "plan.annual.subtitle": "Maximum savings in a single payment.",
            "plan.annual.price": "R$ 79.90 / year",
            "plan.annual.feature1": "All Free features",
            "plan.annual.feature2": "Cloud sync",
            "plan.annual.feature3": "Compact Mode (Desktop)",
            "plan.annual.feature4": "Standby Mode (Mobile)",
            "plan.annual.feature5": "Full history",
            "plan.annual.cta": "Subscribe Annual",
            "faq.title": "Frequently Asked Questions",
            "faq.q1": "Is there any lock-in period for the subscription?",
            "faq.a1": "No. The Premium plan is managed through our secure web portal and can be canceled at any time without bureaucracy.",
            "faq.q2": "Does the app require constant internet?",
            "faq.a2": "Only for data sync. Pomodoro cycles and the timer work offline and update your history once you're back online.",
            "faq.q3": "Which platforms does Focuswind support?",
            "faq.a3": "We currently offer native, optimized support for macOS, iOS, and Android.",
            "footer.title": "Raise the standard of your workflow.",
            "footer.subtitle": "Stop using tools that compete for your attention.",
            "footer.rights": "© 2026 FocusWind. All rights reserved.",
            "footer.terms": "Terms of Use",
            "footer.privacy": "Privacy Policy",
            "legal.tagline": "Legal Documentation",
            "legal.terms.title": "Terms of Use",
            "legal.privacy.title": "Privacy Policy",
            "legal.subtitle": "Temporary version. Final content will be inserted soon.",
            "legal.loading": "Loading document...",
            "legal.error": "Unable to load document."
        }
    };

    const resolveLanguage = () => {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang === 'pt' || urlLang === 'en') return urlLang;
        const stored = localStorage.getItem('lang');
        if (stored === 'pt' || stored === 'en') return stored;
        return navigator.language && navigator.language.startsWith('pt') ? 'pt' : 'en';
    };

    const applyTranslations = (lang) => {
        const dict = translations[lang] || translations.pt;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            if (el.dataset.i18nAttr) return;
            const value = dict[el.dataset.i18n];
            if (value !== undefined) {
                el.textContent = value;
            }
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attr = el.dataset.i18nAttr;
            const value = dict[el.dataset.i18n];
            if (value !== undefined && attr) {
                el.setAttribute(attr, value);
            }
        });
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl && dict[titleEl.dataset.i18n]) {
            titleEl.textContent = dict[titleEl.dataset.i18n];
        }
        document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    };

    const updateLangButtons = (lang) => {
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });
    };

    const escapeHtml = (str) => {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };

    const formatInline = (text) => {
        let content = escapeHtml(text);
        content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/_(.+?)_/g, '<em>$1</em>');
        content = content.replace(/`([^`]+)`/g, '<code>$1</code>');
        return content;
    };

    const markdownToHtml = (md) => {
        const lines = md.split(/\r?\n/);
        let html = '';
        let inList = false;
        let h1Skipped = false;

        lines.forEach(line => {
            if (line.trim() === '') {
                if (inList) {
                    html += '</ul>';
                    inList = false;
                }
                return;
            }

            if (/^#\s+/.test(line)) {
                if (!h1Skipped) {
                    h1Skipped = true;
                    return;
                }
                const content = formatInline(line.replace(/^#\s+/, ''));
                html += `<h1>${content}</h1>`;
                return;
            }

            if (/^##\s+/.test(line)) {
                const content = formatInline(line.replace(/^##\s+/, ''));
                html += `<h2>${content}</h2>`;
                return;
            }

            if (/^###\s+/.test(line)) {
                const content = formatInline(line.replace(/^###\s+/, ''));
                html += `<h3>${content}</h3>`;
                return;
            }

            if (/^-\s+/.test(line)) {
                if (!inList) {
                    html += '<ul>';
                    inList = true;
                }
                let content = line.replace(/^-\s+/, '');
                const hasBreak = content.endsWith('\\');
                if (hasBreak) content = content.slice(0, -1);
                const formatted = formatInline(content) + (hasBreak ? '<br>' : '');
                html += `<li>${formatted}</li>`;
                return;
            }

            if (inList) {
                html += '</ul>';
                inList = false;
            }

            const hasBreak = line.endsWith('\\');
            const content = hasBreak ? line.slice(0, -1) : line;
            const formatted = formatInline(content) + (hasBreak ? '<br>' : '');
            html += `<p>${formatted}</p>`;
        });

        if (inList) {
            html += '</ul>';
        }
        return html;
    };

    const loadMarkdown = async (lang) => {
        const map = {
            terms: { pt: 'docs/terms_pt.md', en: 'docs/terms_en.md' },
            privacy: { pt: 'docs/privacy_pt.md', en: 'docs/privacy_en.md' }
        };
        document.querySelectorAll('[data-doc]').forEach(async (container) => {
            const doc = container.dataset.doc;
            const path = map[doc] ? map[doc][lang] : null;
            if (!path) return;
            try {
                const response = await fetch(path);
                const text = await response.text();
                container.innerHTML = markdownToHtml(text);
            } catch (error) {
                const dict = translations[lang] || translations.pt;
                container.textContent = dict["legal.error"];
            }
        });
    };

    const setLanguage = (lang) => {
        const nextLang = lang === 'en' ? 'en' : 'pt';
        localStorage.setItem('lang', nextLang);
        applyTranslations(nextLang);
        updateLangButtons(nextLang);
        loadMarkdown(nextLang);
    };

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    setLanguage(resolveLanguage());

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros itens
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
            });

            // Abre o item clicado se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const drawer = document.getElementById('mobile-drawer');
    const menuButton = document.querySelector('.mobile-menu-btn');
    const closeButton = drawer ? drawer.querySelector('.drawer-close') : null;

    const setDrawerOpen = (open) => {
        if (!drawer || !menuButton) return;
        drawer.classList.toggle('open', open);
        menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('drawer-open', open);
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (open && scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.paddingRight = '';
        }
    };

    if (menuButton && drawer) {
        menuButton.addEventListener('click', () => {
            const isOpen = drawer.classList.contains('open');
            setDrawerOpen(!isOpen);
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => setDrawerOpen(false));
    }

    if (drawer) {
        drawer.addEventListener('click', (e) => {
            if (e.target === drawer) {
                setDrawerOpen(false);
            }
        });

        drawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setDrawerOpen(false));
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setDrawerOpen(false);
        }
    });

    // Navbar Blur Effect on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(5, 5, 5, 0.9)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(5, 5, 5, 0.8)';
        }
    });

    // Smooth Scroll para Links Internos (Compatibilidade extra)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
