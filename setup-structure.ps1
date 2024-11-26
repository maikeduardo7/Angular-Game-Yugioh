# Execute o arquivo da seguinte maneira:
# 1 - Abra o PowerShell com permissões de administrador
# 2 - Execute o comando: .\setup-structure.ps1

# Criar a pasta core e suas subpastas
ng generate module core
New-Item -ItemType Directory -Force -Path "src/app/core/services"
New-Item -ItemType Directory -Force -Path "src/app/core/interceptors"
New-Item -ItemType Directory -Force -Path "src/app/core/guards"

# Criar a pasta shared e suas subpastas
ng generate module shared
New-Item -ItemType Directory -Force -Path "src/app/shared/components"
New-Item -ItemType Directory -Force -Path "src/app/shared/directives"
New-Item -ItemType Directory -Force -Path "src/app/shared/pipes"
New-Item -ItemType Directory -Force -Path "src/app/shared/models"
# TODO: Component Navbar
ng generate component shared/components/header

# Criar os modelos em shared
# ng generate class shared/models/cliente --type=model
# ng generate class shared/models/pedido --type=model
# ng generate class shared/models/itens-pedido --type=model
# ng generate class shared/models/vendedor --type=model
New-Item -ItemType File -Force -Path "src/app/shared/models/index.ts"

# Criar os módulos para clientes, pedidos e vendedores e suas subpastas
ng generate module modules/clientes
New-Item -ItemType Directory -Force -Path "src/app/modules/clientes/components"

ng generate module modules/pedidos
New-Item -ItemType Directory -Force -Path "src/app/modules/pedidos/components"

ng generate module modules/vendedores
New-Item -ItemType Directory -Force -Path "src/app/modules/vendedores/components"

# Criar os services para Clientes, Pedidos e Vendedores e suas subpastas
ng generate service modules/clientes/services/cliente
ng generate service modules/pedidos/services/pedido
ng generate service modules/vendedores/services/vendedor

# Criar os models para Clientes, Pedidos e Vendedores
ng generate class modules/clientes/models/cliente --type=model
ng generate class modules/pedidos/models/pedido --type=model
ng generate class modules/pedidos/models/itens-pedido --type=model
ng generate class modules/vendedores/models/vendedor --type=model
New-Item -ItemType File -Force -Path "src/app/modules/clientes/models/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/pedidos/models/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/vendedores/models/index.ts"

# Criar o módulo layouts
ng generate module layouts
New-Item -ItemType Directory -Force -Path "src/app/layouts/components"

# Criar os módulos pages
ng generate module pages
ng generate module pages/home
ng generate module pages/about --routing
ng generate module pages/clientes --routing
ng generate module pages/pedidos --routing
ng generate module pages/vendedores --routing

# Criar os componentes sem subpasta (--flat)
ng generate component pages/about/about --flat
ng generate component pages/home/home --flat

# Criar os componentes com subpasta
ng generate component pages/clientes/cliente-create
ng generate component pages/clientes/cliente-detail
ng generate component pages/clientes/cliente-list
ng generate component pages/clientes/cliente-update

ng generate component pages/pedidos/pedidos-create
ng generate component pages/pedidos/pedidos-detail
ng generate component pages/pedidos/pedidos-list
ng generate component pages/pedidos/pedidos-update

ng generate component pages/vendedores/vendedores-create
ng generate component pages/vendedores/vendedores-detail
ng generate component pages/vendedores/vendedores-list
ng generate component pages/vendedores/vendedores-update

# Adicionar os arquivos index.ts em cada diretório necessário
New-Item -ItemType File -Force -Path "src/app/core/index.ts"
New-Item -ItemType File -Force -Path "src/app/core/services/index.ts"
New-Item -ItemType File -Force -Path "src/app/core/interceptors/index.ts"
New-Item -ItemType File -Force -Path "src/app/core/guards/index.ts"
New-Item -ItemType File -Force -Path "src/app/shared/index.ts"
New-Item -ItemType File -Force -Path "src/app/shared/components/index.ts"
New-Item -ItemType File -Force -Path "src/app/shared/directives/index.ts"
New-Item -ItemType File -Force -Path "src/app/shared/pipes/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/clientes/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/clientes/components/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/clientes/services/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/pedidos/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/pedidos/components/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/pedidos/services/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/vendedores/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/vendedores/components/index.ts"
New-Item -ItemType File -Force -Path "src/app/modules/vendedores/services/index.ts"
New-Item -ItemType File -Force -Path "src/app/layouts/index.ts"
New-Item -ItemType File -Force -Path "src/app/layouts/components/index.ts"
New-Item -ItemType File -Force -Path "src/app/pages/index.ts"
New-Item -ItemType File -Force -Path "src/app/pages/home/index.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/home/components/index.ts"
New-Item -ItemType File -Force -Path "src/app/pages/about/index.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/about/components/index.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/clientes/clientes-routing.module.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/clientes/clientes.module.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/clientes/index.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/pedidos/pedidos-routing.module.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/pedidos/pedidos.module.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/pedidos/index.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/vendedores/vendedores-routing.module.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/vendedores/vendedores.module.ts"
# New-Item -ItemType File -Force -Path "src/app/pages/vendedores/index.ts"
