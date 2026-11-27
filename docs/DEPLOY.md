# Deploy · Cloudflare Pages

## 1. Crear el repositorio remoto

```powershell
cd "C:\000 - aaa\horcones-site"
git remote add origin git@github.com:abyssiagency-rmc/horcones-site.git
git push -u origin main
git push -u origin staging
```

Si el repositorio remoto todavía no existe, crearlo primero en GitHub como privado.

## 2. Cloudflare Pages · producción

1. Cloudflare Dashboard.
2. **Workers & Pages**.
3. **Create application**.
4. **Pages**.
5. **Connect to Git**.
6. Seleccionar `horcones-site`.
7. Configurar:

```text
Project name:       horcones-site-prod
Production branch:  main
Root directory:     /
Build command:      npm ci && npm run build
Output directory:   dist
Node version:       20
```

8. Deploy.

## 3. Cloudflare Pages · staging

Crear un segundo proyecto:

```text
Project name:       horcones-site-staging
Production branch:  staging
Root directory:     /
Build command:      npm ci && npm run build
Output directory:   dist
Node version:       20
```

## 4. Dominios

### Staging

Agregar en el proyecto staging:

```text
demo.horconesrc.cl
```

Cloudflare crea el registro DNS.

### Producción

Antes de agregar `horconesrc.cl`:

1. Detener el túnel actual del sitio.
2. Eliminar el CNAME del túnel para `horconesrc.cl`.
3. Agregar `horconesrc.cl` como custom domain del proyecto producción.
4. Verificar el certificado.

No detener el túnel de `app.horconesrc.cl`.

## 5. Protección de main

En GitHub:

- Settings → Branches → Add branch protection rule.
- Branch name pattern: `main`.
- Activar:
  - Require a pull request before merging.
  - Require approvals.
  - Require status checks to pass.
  - Require conversation resolution.
- Restringir pushes directos.

## 6. Preview por rama

Cloudflare Pages genera una URL por cada rama/PR.

Ejemplo:

```text
feat/tienda → https://feat-tienda.horcones-site.pages.dev
```

Esa URL se comparte solo para revisión; no es producción.

## 7. Verificación

```powershell
Invoke-WebRequest https://demo.horconesrc.cl
Invoke-WebRequest https://demo.horconesrc.cl/partidos
Invoke-WebRequest https://demo.horconesrc.cl/tienda
Invoke-WebRequest https://horconesrc.cl
```

## 8. Rollback

Cloudflare Pages conserva deployments anteriores.

Si un deploy de `main` falla:

1. Ir al proyecto producción.
2. Deployments.
3. Elegir el deployment anterior.
4. **Rollback**.

## 9. Reglas

- No publicar desde `main` sin PR.
- No usar forks.
- No subir `node_modules` ni `dist`.
- No incluir secretos.
- No conectar Cloudflare al repositorio de la app.
