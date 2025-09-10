// api/cadastro.js

import { User } from "../models"; // tem que ajeitar
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  try {
    const { nomeCompleto, email, senha, endereco, telefone, idade, sexo } = req.body;

    // Validações básicas
    if (!nomeCompleto || !email || !senha) {
      return res.status(400).json({ message: "Campos obrigatórios não preenchidos" });
    }

    // Verifica se usuário já existe
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: "E-mail já cadastrado" });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Cria o usuário
    const newUser = await User.create({
      nomeCompleto,
      email,
      senha: hashedPassword,
      endereco,
      telefone,
      idade,
      sexo,
    });

    return res.status(201).json({ message: "Usuário cadastrado com sucesso", userId: newUser.id });
  } catch (err) {
    console.error("Erro ao cadastrar:", err);
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}
