# Knowledge Website - Context

## Project Info

- **Repo:** git@github.com:davalimi/knowledge-site.git
- **Server:** 152.53.201.153
- **Path:** /opt/app/knowledge-website/
- **URL:** https://knowledge-website-u16.vm.elestio.app
- **Framework:** Nextra (Next.js) avec static export
- **Container:** Docker avec `serve` pour fichiers statiques

---

## Git Config

- **Remote:** SSH (git@github.com:davalimi/knowledge-site.git)
- **SSH Key:** Ajoutée sur GitHub sous "knowledge-website-server"
- **Push:** Sans mot de passe via SSH

---

## Déploiement

```bash
# Rebuild et redémarrer le site
cd /opt/app/knowledge-website
docker compose down
docker compose build --no-cache
docker compose up -d
```

---

## Structure

```
/opt/app/knowledge-website/
├── pages/
│   ├── networking/    # Cours networking (7 cours)
│   ├── devops/        # Cours DevOps (16 cours)
│   ├── dev/           # Cours dev (à venir)
│   └── security/      # Cours sécurité (à venir)
├── Dockerfile
├── docker-compose.yml
├── next.config.mjs
└── theme.config.jsx
```

---

## Cours créés (2026-01-15)

### Networking (7)
- tcp-udp, http-https, dns, routing
- 05-firewalls, 06-vpn, 07-ssh-tunnels

### DevOps (16)
1. 01-linux-basics
2. 02-git
3. 03-build-tools
4. 04-cloud-basics
5. 05-nexus
6. 06-docker
7. 07-jenkins
8. 08-aws
9. 09-kubernetes
10. 10-eks
11. 11-terraform
12. 12-python
13. 13-python-automation
14. 14-ansible
15. 15-prometheus
16. 16-databases

---

## Notes importantes

- Travailler directement sur ce serveur, pas en local
- Les fichiers .md doivent être .mdx pour Nextra
- Mettre à jour _meta.json pour la navigation
- Après modifications: rebuild Docker
