´´ mermaid
flowchart TD
    A[Website] --> B[Plataforma]

    %% Módulos da Plataforma
    subgraph B[Plataforma]
        C[Formulário Inteligente]
        D[Pagamento _Gateway_]
        E[Upload de Documentos]
        F[Emissão Carteira Digital _QR Code_]
        G[Gestão de Logística / Carteira Física]
    end

    %% Fluxo interno
    C --> D
    D --> E
    E --> F
    E --> G

    F --> H[Validação Jurídica]
    G
    H[Validação Jurídica]

    A --> I[Atendimento _WhatsApp / Vídeo_]

    %% Integrações externas
    D --- D1[_Bancos / PIX / Cartões_]
    E --- E1[_API de Validação de Documentos / OCR_]
    F --- F1[_App Mobile / API de Consulta QR Code_]
    G --- G1[_Correios / Transportadoras_]
    I --- I1[_WhatsApp API / Video Call Provider_]

    %% Cores por categoria
    classDef website fill:#009688,stroke:#fff,stroke-width:2px,color:#fff
    classDef plataforma fill:#00bfa6,stroke:#fff,stroke-width:2px,color:#fff
    classDef fisico fill:#ff9800,stroke:#fff,stroke-width:2px,color:#fff
    classDef servico fill:#3f51b5,stroke:#fff,stroke-width:2px,color:#fff
    classDef legal fill:#4caf50,stroke:#fff,stroke-width:2px,color:#fff
    classDef externo fill:#9c27b0,stroke:#fff,stroke-width:2px,color:#fff

    %% Classes
    class A website
    class B,C,D,E,F plataforma
    class G fisico
	style B color:#D9D9D9,fill:#A6A6A6
    ``
