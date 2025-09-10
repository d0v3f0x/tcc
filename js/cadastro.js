document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formCadastro');

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Impede envio padrão do formulário

    // Captura os valores digitados
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('inputSexo').value;
    const termos = document.getElementById('termos').checked;

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

    if (!termos) {
      alert('Para prosseguir, aceite os termos de uso.');
      return;
    }

    // Objeto com os dados do cadastro
    const data = {
      nomeCompleto,
      email,
      senha,
      endereco,
      telefone,
      idade,
      sexo,
    };

    try {
      // Envia para a API
      const response = await fetch('/api/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'entrar.html'; // redireciona para login
      } else {
        alert('Erro: ' + (result.message || 'Não foi possível cadastrar.'));
      }
    } catch (err) {
      console.error('Erro na requisição:', err);
      alert('Erro ao conectar com o servidor.');
    }
  });

  // seleção de sexo
  const btnSexo = document.getElementById('btnSexo');
  const sexoOptions = document.getElementById('sexoOptions');
  const inputSexo = document.getElementById('inputSexo');

  btnSexo.addEventListener('click', () => {
    sexoOptions.style.display = sexoOptions.style.display === 'block' ? 'none' : 'block';
  });

  sexoOptions.querySelectorAll('.sexo-option').forEach(option => {
    option.addEventListener('click', () => {
      const valor = option.getAttribute('data-value');
      btnSexo.textContent = valor;
      inputSexo.value = valor;
      sexoOptions.style.display = 'none';
    });
  });

  // telefone encaixar certinho
  const telefoneInput = document.getElementById('telefone');  
  IMask(telefoneInput, { mask: '(00) 00000-0000' });

  // Fecha o dropdown se clicar fora dele
  document.addEventListener('click', (e) => {
    if (!btnSexo.contains(e.target) && !sexoOptions.contains(e.target)) {
      sexoOptions.style.display = 'none';
    }
  });
});
