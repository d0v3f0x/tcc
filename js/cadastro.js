document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formCadastro');


  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede envio padrão do formulário


    // Captura os valores digitados
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;
    const sexo = document.getElementById('inputSexo').value;


    // Verificações de validação
    if (email !== confirmEmail) {
      alert('Os e-mails não coincidem.');
      return;
    }


    if (senha !== confirmSenha) {
      alert('As senhas não coincidem.');
      return;
    }


    if (!sexo) {
      alert('Por favor, selecione o sexo.');
      return;
    }


    // Se tudo estiver correto, redireciona
    window.location.href = 'index.html';
  });


  // Dropdown de seleção de sexo
  const btnSexo = document.getElementById('btnSexo');
  const sexoOptions = document.getElementById('sexoOptions');
  const inputSexo = document.getElementById('inputSexo'); // Campo escondido que armazena o valor


  // Abre/fecha o dropdown quando o botão é clicado
  btnSexo.addEventListener('click', () => {
    sexoOptions.style.display = sexoOptions.style.display === 'block' ? 'none' : 'block';
  });


  // Define o valor do sexo ao clicar em uma opção
  sexoOptions.querySelectorAll('.sexo-option').forEach(option => {
    option.addEventListener('click', () => {
      const valor = option.getAttribute('data-value');
      btnSexo.textContent = valor;        // Mostra o valor no botão
      inputSexo.value = valor;            // Armazena o valor no input hidden
      sexoOptions.style.display = 'none'; // Fecha o dropdown
    });
  });


  // Aplicar máscara no campo de telefone
  const telefoneInput = document.getElementById('telefone');
  IMask(telefoneInput, {
    mask: '(00) 00000-0000'  // Formato com DDD e 9 dígitos
  });
});


  // Fecha o dropdown se clicar fora dele
  document.addEventListener('click', (e) => {
    if (!btnSexo.contains(e.target) && !sexoOptions.contains(e.target)) {
      sexoOptions.style.display = 'none';
    }
  });