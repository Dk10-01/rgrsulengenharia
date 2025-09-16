
// Projects data
const projects = [
    {
        id: 1,
        title: "Projeto Residencial - Casa Moderna",
        description: "Instalação elétrica completa em residência de 350m², incluindo automação residencial e sistema de energia solar.",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
        category: "Residencial",
        details: "Projeto completo de instalação elétrica para residência moderna de alto padrão. Incluiu sistema de automação residencial com controle de iluminação, climatização e segurança integrados. Sistema de energia solar fotovoltaica de 10kWp instalado no telhado, proporcionando economia de até 90% na conta de energia elétrica."
    },
    {
        id: 2,
        title: "Complexo Comercial - Shopping Center",
        description: "Projeto elétrico de grande porte para shopping center com 120 lojas, incluindo sistema de emergência e eficiência energética.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
        category: "Comercial",
        details: "Desenvolvimento do projeto elétrico completo para shopping center de grande porte. Dimensionamento de subestação de 2MVA, sistema de distribuição para 120 lojas, iluminação de ambientes, sistema de emergência e segurança. Projeto focado em eficiência energética com uso de iluminação LED e sistemas inteligentes de controle."
    },
    {
        id: 3,
        title: "Indústria Alimentícia - Fábrica",
        description: "Modernização do sistema elétrico industrial com foco em eficiência energética e automação de processos.",
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&h=300&fit=crop",
        category: "Industrial",
        details: "Modernização completa do sistema elétrico de indústria alimentícia. Substituição de equipamentos obsoletos, implementação de sistema de automação industrial com CLPs Siemens, monitoramento em tempo real do consumo energético e implementação de correção do fator de potência, resultando em 35% de economia energética."
    },
    {
        id: 4,
        title: "Sistema Solar Fotovoltaico",
        description: "Instalação de sistema de energia solar de 50kWp em empresa de logística, reduzindo 80% dos custos com energia.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
        category: "Energia Solar",
        details: "Projeto e instalação de sistema solar fotovoltaico de 50kWp para empresa de logística. Sistema composto por 150 módulos fotovoltaicos de 330W, inversores trifásicos e sistema de monitoramento remoto. Projeto resultou em redução de 80% nos custos com energia elétrica e payback de 4 anos."
    },
    {
        id: 5,
        title: "Automação Residencial Completa",
        description: "Casa inteligente com controle automatizado de iluminação, climatização e sistemas de segurança.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
        category: "Automação",
        details: "Implementação de sistema de automação residencial completo utilizando protocolo KNX. Controle automatizado de iluminação com sensores de presença e luminosidade, climatização inteligente, controle de persianas, sistema de segurança integrado com câmeras e alarmes, tudo controlado via aplicativo móvel."
    },
    {
        id: 6,
        title: "Eficiência Energética - Hotel",
        description: "Projeto de modernização elétrica em hotel de grande porte, resultando em 40% de economia energética.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
        category: "Comercial",
        details: "Auditoria energética e modernização elétrica completa de hotel com 200 quartos. Substituição de toda iluminação por LED, implementação de sistema de gestão energética, otimização do sistema de climatização e instalação de equipamentos para correção do fator de potência. Resultado: 40% de redução no consumo energético."
    },
    {
        id: 7,
        title: "Infraestrutura de Telecomunicações",
        description: "Projeto completo de cabeamento estruturado e instalação de equipamentos de telecomunicações para empresa de tecnologia.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
        category: "Telecomunicação",
        details: "Desenvolvimento de projeto completo de infraestrutura de telecomunicações para empresa de tecnologia com 500 funcionários. Cabeamento estruturado categoria 6A, rack de telecomunicações, sistema de CFTV IP, controle de acesso biométrico e rede Wi-Fi corporativa de alta performance com cobertura total do edifício."
    },
    {
        id: 8,
        title: "Aprovação junto à Concessionária",
        description: "Processo completo de aprovação de projeto elétrico junto à concessionária local para indústria de grande porte.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
        category: "Aprovação",
        details: "Desenvolvimento e aprovação de projeto elétrico junto à concessionária local para indústria metalúrgica. Dimensionamento de subestação de 5MVA, proteção e medição, projeto de entrada de energia em alta tensão (13,8kV). Acompanhamento completo do processo de aprovação, vistoria e energização junto à concessionária."
    }
];

// Function to create project card HTML
function createProjectCard(project, index) {
    return `
        <div class="project-card" onclick="openModal(${project.id})" style="animation-delay: ${index * 0.1}s">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-category">${project.category}</div>
                <div class="project-icon">↗</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `;
}

// Function to open modal with project details
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    
    // Populate modal with project data
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalDetails.textContent = project.details;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (projectsGrid) {
        const projectsHTML = projects.map((project, index) => 
            createProjectCard(project, index)
        ).join('');
        
        projectsGrid.innerHTML = projectsHTML;
    }
    
    // Modal event listeners
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with ESC key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
    }
});
