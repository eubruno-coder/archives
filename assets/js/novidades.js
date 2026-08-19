const CentralNovidades = (() => {
    const STORAGE_LAST_ACCESS = 'central_atendimento_ultimo_acesso';
    const STORAGE_SEEN = 'central_atendimento_novidades_vistas';

    const novidades = [
        {
            id: '2026-08-19-scripts',
            data: '2026-08-19T09:00:00',
            tipo: 'Atualização',
            titulo: 'Central de Scripts preparada para novas atualizações',
            descricao: 'A estrutura da Central foi preparada para receber e destacar alterações nos conteúdos de apoio ao atendimento.'
        },
        {
            id: '2026-08-19-novidades',
            data: '2026-08-19T09:30:00',
            tipo: 'Novo recurso',
            titulo: 'Nova página de Novidades',
            descricao: 'Agora a Intranet possui uma área dedicada para informar o usuário sobre atualizações realizadas desde o último acesso.'
        }
    ];

    function getSeen() {
        try { return JSON.parse(localStorage.getItem(STORAGE_SEEN) || '[]'); }
        catch { return []; }
    }

    function getNewItems() {
        const lastAccess = localStorage.getItem(STORAGE_LAST_ACCESS);
        const seen = getSeen();

        return novidades.filter(item => {
            if (seen.includes(item.id)) return false;
            if (!lastAccess) return true;
            return new Date(item.data) > new Date(lastAccess);
        });
    }

    function getNewCount() {
        return getNewItems().length;
    }

    function registerAccess() {
        localStorage.setItem(STORAGE_LAST_ACCESS, new Date().toISOString());
    }

    function markAsSeen(ids) {
        const seen = getSeen();
        localStorage.setItem(STORAGE_SEEN, JSON.stringify([...new Set([...seen, ...ids])]));
    }

    return { novidades, getNewItems, getNewCount, registerAccess, markAsSeen };
})();
