<?php
session_start();
if (!isset($_SESSION['usuario_id'])) {
  header("Location: login.html");
  exit;
}

$cargo = $_SESSION['usuario_cargo'] ?? 'FUNCIONARIO';
$nivel = $_SESSION['usuario_nivel'] ?? 'FUNCIONARIO';
$nomeUsuario = htmlspecialchars($_SESSION['usuario_nome'] ?? 'Usuário');

$verFinanceiro = ($nivel === 'ADMIN' || $cargo === 'Gerente');
$verEstoque = ($nivel === 'ADMIN' || $cargo === 'Gerente' || $cargo === 'Cozinheiro');
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>XTEC - Painel Administrativo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="css/dashboard.css"> 
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>

  <div class="dashboard-layout">

    <aside class="sidebar">
      <div>
        <div class="sidebar-header">
          <h2 class="nome-empresa">XTEC</h2>
        </div>
        <nav class="sidebar-nav">
          <a href="visao_geral.php" class="nav-item ">
            <i class="fa-solid fa-chart-line"></i>
            <span>Visão Geral</span>
          </a>

          <?php if ($verFinanceiro): ?>
            <a href="#" class="nav-item active">
              <i class="fa-solid fa-wallet"></i>
              <span>Fluxo de Caixa</span>
            </a>
          <?php endif; ?>

          <?php if ($verEstoque): ?>
            <a href="estoque.php" class="nav-item">
              <i class="fa-solid fa-boxes-stacked"></i>
              <span>Estoque</span>
            </a>
          <?php endif; ?>

          <a href="pedidos.php" class="nav-item">
            <i class="fa-solid fa-receipt"></i>
            <span>Pedidos</span>
          </a>
          <a href="cardapios.php" class="nav-item">
            <i class="fa-solid fa-utensils"></i>
            <span>Cardápio</span>
          </a>
          <a href="clientes.php" class="nav-item">
            <i class="fa-solid fa-users"></i>
            <span>Clientes</span>
          </a>
          <a href="configuracoes.php" class="nav-item">
            <i class="fa-solid fa-gear"></i>
            <span>Configurações</span>
          </a>
        </nav>
          </div>
      <div class="sidebar-footer">
        <span style="font-size:12px; color:var(--creme); opacity:0.7; margin-bottom:8px; display:block; padding: 0 10px;">
          <?= $nomeUsuario ?> <br> (<?= htmlspecialchars($cargo) ?>)
        </span>
        <a href="../backend/logout.php" class="btn-sair">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Sair</span>
        </a>
      </div>
    </aside>
    <main class="main-content">
      <header class="topbar">
        <div class="boas-vindas">
          <h1>Fluxo Caixa</h1>
          <p>Operação em tempo real</p>
        </div>
        <div class="usuario-perfil">
          <span class="status-loja online"><i class="fa-solid fa-circle"></i> Loja Aberta</span>
          <span class="nome-admin"><?= $nomeUsuario ?></span>
        </div>
      </header>
</body>
</html>