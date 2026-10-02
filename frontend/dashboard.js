document.addEventListener('DOMContentLoaded', () => {
    fetch('../backend/api/dados_dashboard.php')
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                console.error('Erro da API:', data.erro);
                return;
            }


            if (data.financeiro) {
                document.getElementById('fat-hoje').innerText = `R$ ${data.financeiro.faturamento_hoje}`;

         
                new Chart(document.getElementById('graficoPizza'), {
                    type: 'doughnut',
                    data: {
                        labels: ['Lucro', 'Despesas'],
                        datasets: [{
                            data: [data.financeiro.lucro, data.financeiro.despesas],
                            backgroundColor: ['rgba(27, 199, 27, 0.795)', '#fa4444'],
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { position: 'bottom', labels: { color: '#f2e3c6' } }
                        }
                    }
                });

            
                new Chart(document.getElementById('graficoBarra'), {
                    type: 'bar',
                    data: {
                        labels: ['Capital Inicial', 'Capital Atual'],
                        datasets: [{
                            data: [data.financeiro.capital_inicial, data.financeiro.capital_atual],
                            backgroundColor: ['#fa4444', 'rgba(27, 199, 27, 0.795)'],
                            borderRadius: 6
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: { ticks: { color: '#f2e3c6' }, grid: { color: 'rgba(242, 227, 198, 0.1)' } },
                            x: { ticks: { color: '#f2e3c6' } }
                        },
                        plugins: { legend: { display: false } }
                    }
                });
            }

          
            document.getElementById('pedidos-hoje').innerText = data.pedidos_hoje;
            if (data.estoque) {
                document.getElementById('alertas-estoque').innerText = data.estoque.total_alertas;
            }

           
            new Chart(document.getElementById('graficoLinha'), {
                type: 'line',
                data: {
                    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    datasets: [{
                        label: 'Pedidos',
                        data: data.pedidos_semana,
                        borderColor: '#b12e2f',
                        backgroundColor: 'rgba(177, 46, 47, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { ticks: { color: '#f2e3c6' }, grid: { color: 'rgba(242, 227, 198, 0.1)' } },
                        x: { ticks: { color: '#f2e3c6' } }
                    },
                    plugins: { legend: { display: false } }
                }
            });

            // 4. Lista de Vencimento (com proteção XSS)
            if (data.estoque && data.estoque.lista.length > 0) {
                document.getElementById('lista-vencimento').innerHTML = data.estoque.lista.map(item => `
                    <div class="alerta-vencimento ${item.critico ? 'critico' : ''}">
                        <i class="fa-solid ${item.critico ? 'fa-circle-exclamation' : 'fa-clock'}"></i>
                        <div><strong>${escapeHtml(item.nome)}</strong><br><small>${escapeHtml(item.motivo)}</small></div>
                    </div>
                `).join('');
            } else if (data.estoque) {
                document.getElementById('lista-vencimento').innerHTML = '<p style="text-align:center; color:#4ade80; padding:20px;"><i class="fa-solid fa-check"></i> Estoque em dia</p>';
            }

            // 5. Lista de Equipe (com proteção XSS)
            if (data.equipe_online && data.equipe_online.length > 0) {
                document.getElementById('lista-equipe').innerHTML = data.equipe_online.map(func => `
                    <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid rgba(242,227,198,0.15);">
                        <span>${escapeHtml(func.nome)}</span>
                        <span class="status-online" style="color:#4ade80;"><small>${escapeHtml(func.cargo)}</small></span>
                    </div>
                `).join('');
            } else {
                document.getElementById('lista-equipe').innerHTML = '<p style="text-align:center; opacity:0.6; padding:20px;">Nenhum funcionário online no momento.</p>';
            }
        })
        .catch(err => console.error('Erro ao carregar dashboard:', err));
});

// Função auxiliar para prevenir ataques XSS ao exibir dados do banco
function escapeHtml(text) {
    if (!text) return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}