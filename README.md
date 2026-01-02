# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deploy no Easypanel

Este projeto está configurado para deploy no Easypanel. O Easypanel detecta automaticamente projetos Node.js/Vite através do `package.json`. Siga os passos abaixo para configurar o serviço.

### Pré-requisitos

- Repositório no GitHub com o código do projeto
- Conta no Easypanel
- Acesso ao painel do Easypanel

### Passo a passo de configuração

#### 1. Criar novo serviço

1. Acesse o painel do Easypanel
2. Clique em **"New Service"** ou edite um serviço existente
3. Selecione **"App"** como tipo de serviço

#### 2. Configurar Source (Fonte)

Na seção **Source**:

- **Source Type**: `GitHub`
- **Repository**: Selecione ou informe seu repositório (ex: `seu-usuario/ifc2026`)
- **Branch**: `main` ou `master` (conforme seu repositório)
- **Root Directory**: Deixe vazio (ou `/` se necessário)

#### 3. Configurar Build

**Opção A - Usando Docker (Recomendado para evitar problemas com nixpacks):**

Na seção **Build**:

- **Build Pack**: Selecione `Docker`
- **Dockerfile Path**: Deixe vazio (ou `/`) - o Easypanel detectará automaticamente o `Dockerfile` na raiz
- **Build Command**: Deixe vazio (o Dockerfile já define tudo)

> **Nota**: O `Dockerfile` já está configurado e faz:
> - Build multi-stage para otimizar o tamanho da imagem
> - Instala dependências com `npm ci`
> - Executa `npm run build`
> - Serve a aplicação com `serve` na porta 8080

**Opção B - Usando Nixpacks (se Docker não estiver disponível):**

Na seção **Build**:

- **Build Pack**: Deixe em **auto-detect** (o Easypanel detectará automaticamente que é um projeto Node.js/Vite)
- **Build Command**: `npm ci && npm run build`

> **Nota**: O Easypanel detectará automaticamente:
> - Que é um projeto Node.js através do `package.json`
> - Instalará dependências automaticamente
> - Você precisa especificar o Build Command manualmente: `npm ci && npm run build`

#### 4. Configurar Start Command

**Se estiver usando Docker:**
- **Start Command**: Deixe vazio (o Dockerfile já define o CMD)

**Se estiver usando Nixpacks:**
- **Start Command**: `npm start`

> **Explicação**: 
> - Com Docker: O `Dockerfile` já define `CMD ["serve", "-s", "dist", "-l", "8080"]`
> - Com Nixpacks: O script `start` no `package.json` executa `serve -s dist -l 8080`, que:
>   - Serve a pasta `dist` (output do build do Vite)
>   - Usa modo SPA (`-s`) para React Router funcionar corretamente
>   - Escuta na porta `8080`

#### 5. Configurar Port

Na seção **Port/Networking**:

- **Port**: `8080`

#### 6. Recursos (Resources)

Na seção **Resources**:

- **CPU**: Mínimo `0.25` (250m)
- **Memory**: Mínimo `256MB` (512MB recomendado)
- **Disk**: `1GB` é suficiente

#### 7. Variáveis de Ambiente

Este projeto não requer variáveis de ambiente. Se precisar adicionar no futuro, configure na seção **Environment Variables**.

#### 8. Deploy

1. Clique em **"Deploy"** ou **"Save"**
2. Aguarde o build e deploy completarem
3. Verifique os logs para confirmar que está funcionando

### Tabela de Configurações

| Seção | Campo | Valor |
|-------|-------|-------|
| **Source** | Repository | Seu repositório GitHub |
| Seção | Campo | Valor (Docker) | Valor (Nixpacks) |
|-------|-------|----------------|------------------|
| **Source** | Repository | Seu repositório GitHub | Seu repositório GitHub |
| **Source** | Branch | `main` ou `master` | `main` ou `master` |
| **Build** | Build Pack | `Docker` | `auto-detect` (ou `Nixpacks`) |
| **Build** | Dockerfile Path | (vazio ou `/`) | - |
| **Build** | Build Command | (vazio) | `npm ci && npm run build` |
| **Start** | Start Command | (vazio) | `npm start` |
| **Port** | Port | `8080` | `8080` |
| **Resources** | CPU | `0.25` (mínimo) |
| **Resources** | Memory | `512MB` (recomendado) |

### Configurações pós-deploy

#### Domínio personalizado

1. No painel do Easypanel, vá para a seção **Domain** do seu serviço
2. Clique em **"Add Domain"**
3. Informe seu domínio (ex: `igrejafamiliadacruz.com.br`)
4. Configure os registros DNS conforme instruções do Easypanel:
   - Adicione um registro CNAME apontando para o domínio fornecido pelo Easypanel
5. Aguarde a propagação DNS (pode levar alguns minutos até 24 horas)
6. O SSL será configurado automaticamente pelo Easypanel

#### Verificação pós-deploy

Após o deploy, verifique:

1. ✅ A aplicação carrega corretamente na URL fornecida
2. ✅ A navegação entre rotas funciona (React Router)
3. ✅ Os assets (imagens, CSS, JS) carregam corretamente
4. ✅ Não há erros no console do navegador
5. ✅ Os logs no Easypanel não mostram erros

### Troubleshooting

#### Erro 404 em rotas

**Problema**: Ao navegar para rotas diretamente, recebe erro 404.

**Solução**: Certifique-se de que o Start Command usa `-s` (modo SPA):
```json
"start": "serve -s dist -l 8080"
```

#### Erro ao baixar nixpacks

**Problema**: Erro `Command failed with exit code 22` ao tentar baixar o nixpacks, ou mensagem sobre arquitetura não suportada (`x86_64-unknown-linux-musl`).

**Solução (Recomendada)**: Use Docker diretamente:
1. O projeto já inclui um `Dockerfile` na raiz
2. No Easypanel, configure:
   - **Build Pack**: Selecione `Docker` em vez de `Nixpacks` ou `auto-detect`
   - **Dockerfile Path**: Deixe vazio (ou `/` se necessário) - o Easypanel detectará automaticamente
   - **Start Command**: Deixe vazio (o Dockerfile já define o CMD)
   - **Port**: `8080`
3. Faça o deploy novamente

**Solução Alternativa** (se Docker não estiver disponível):
- Use **auto-detect** no Build Pack em vez de especificar `Nixpacks` manualmente
- O Easypanel detectará automaticamente que é um projeto Node.js através do `package.json`
- Não é necessário arquivo `nixpacks.toml` - remova-o se existir
- Configure o Build Command manualmente: `npm ci && npm run build`

#### Build falha

**Problema**: O build falha durante o deploy.

**Soluções**:
- Verifique se todas as dependências estão no `package.json`
- Verifique os logs do build no Easypanel para erros específicos
- Certifique-se de que o Build Command está correto: `npm ci && npm run build`
- Verifique se o Node.js está sendo detectado corretamente (o Easypanel usa auto-detect)

#### Porta não encontrada

**Problema**: Erro de porta não encontrada.

**Solução**: Confirme que:
- A porta no Start Command (`8080`) corresponde à Port configurada no Easypanel
- O servidor está escutando em `0.0.0.0` ou `::` (o `serve` faz isso automaticamente)

#### Arquivos não encontrados

**Problema**: A aplicação não carrega arquivos estáticos.

**Solução**: 
- Verifique se o build gerou a pasta `dist`
- Confirme que o `serve` está apontando para `dist` no Start Command
- Verifique os logs do container para ver se o `dist` existe

#### Script "start" não encontrado

**Problema**: Erro `Missing script: "start"`.

**Solução**: 
- Certifique-se de que o `package.json` tem o script `start` definido
- Faça commit e push das alterações no `package.json`
- Aguarde o novo deploy

### Estrutura de arquivos de deploy

Os seguintes arquivos são necessários para o deploy no Easypanel:

**Com Docker (Recomendado):**
- `Dockerfile` - Configuração do Docker para build e deploy (já existe)
- `package.json` - Contém scripts de build (já existe)
- `vite.config.ts` - Configuração do Vite (já existe)

**Com Nixpacks:**
- `package.json` - Contém scripts de build e start (com script `start` e dependência `serve`)
- `vite.config.ts` - Configuração do Vite (já existe)

> **Nota**: 
> - **Docker**: O `Dockerfile` já está configurado e é a opção mais confiável para evitar problemas com nixpacks
> - **Nixpacks**: O Easypanel detecta automaticamente projetos Node.js através do `package.json`. Não é necessário arquivo `nixpacks.toml` - o Easypanel usa auto-detect.

## Deploy alternativo (Lovable)

Se preferir usar o Lovable:

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
