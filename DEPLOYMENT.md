# 🚀 Инструкция по развертыванию ProMentor RUDN

## 📋 Предварительные требования

На сервере должно быть установлено:
- Docker (версия 20.10+)
- Docker Compose (версия 2.0+)
- Git
- SSL сертификаты Let's Encrypt (уже есть)

## 🔧 Установка на сервере

### 1. Подключитесь к серверу

```bash
ssh root@your-server-ip
```

### 2. Клонируйте репозиторий

```bash
cd /opt
git clone <your-repo-url> promentor-rudn
cd promentor-rudn
```

### 3. Проверьте сертификаты

Убедитесь, что сертификаты находятся по пути:
```bash
ls -la /etc/letsencrypt/live/max.isayalot.ru/
```

Вы должны увидеть:
- `fullchain.pem`
- `privkey.pem`

### 4. Запустите деплой скрипт

```bash
chmod +x deploy.sh
./deploy.sh
```

Или вручную:

```bash
# Сборка и запуск
docker-compose build
docker-compose up -d

# Проверка логов
docker logs promentor-rudn -f
```

### 5. Проверьте работу

Откройте в браузере: **https://max.isayalot.ru**

## 🔄 Обновление приложения

### Обновить код и пересобрать:

```bash
cd /opt/promentor-rudn
git pull origin main
./deploy.sh
```

### Или вручную:

```bash
git pull
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 📊 Полезные команды

### Просмотр логов
```bash
# Все логи
docker logs promentor-rudn

# Последние 100 строк
docker logs promentor-rudn --tail 100

# Следить за логами в реальном времени
docker logs promentor-rudn -f
```

### Управление контейнером
```bash
# Остановить
docker-compose down

# Запустить
docker-compose up -d

# Перезапустить
docker-compose restart

# Проверить статус
docker ps -a | grep promentor
```

### Вход в контейнер
```bash
docker exec -it promentor-rudn sh
```

### Очистка (освобождение места)
```bash
# Удалить неиспользуемые образы
docker image prune -a

# Удалить неиспользуемые контейнеры
docker container prune

# Удалить всё неиспользуемое
docker system prune -a
```

## 🔒 Настройка файрвола (UFW)

Если используете UFW:

```bash
# Разрешить HTTP и HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Проверить статус
sudo ufw status
```

## 🔄 Автоматическое обновление SSL сертификатов

Certbot автоматически обновляет сертификаты. Проверить:

```bash
sudo certbot renew --dry-run
```

После обновления сертификата перезапустите nginx:

```bash
docker-compose restart
```

## 🛠️ Отладка

### Проблема: Контейнер не запускается

```bash
# Проверить логи
docker logs promentor-rudn

# Проверить конфигурацию nginx
docker exec promentor-rudn nginx -t
```

### Проблема: SSL не работает

```bash
# Проверить наличие сертификатов
ls -la /etc/letsencrypt/live/max.isayalot.ru/

# Проверить права доступа
ls -la /etc/letsencrypt/archive/max.isayalot.ru/
```

### Проблема: 502 Bad Gateway

```bash
# Проверить запущен ли контейнер
docker ps -a

# Перезапустить
docker-compose restart
```

## 📁 Структура файлов на сервере

```
/opt/promentor-rudn/
├── docker-compose.yml      # Конфигурация Docker Compose
├── Dockerfile              # Инструкции сборки образа
├── nginx.conf             # Конфигурация Nginx
├── deploy.sh              # Скрипт деплоя
├── src/                   # Исходный код
├── public/                # Статические файлы
└── dist/                  # Собранное приложение (создается при сборке)
```

## 🌐 Переменные окружения

Если нужны переменные окружения, создайте файл `.env`:

```bash
# .env
NODE_ENV=production
VITE_API_URL=https://api.example.com
```

Добавьте в `docker-compose.yml`:

```yaml
services:
  promentor-web:
    env_file:
      - .env
```

## 🔐 Рекомендации по безопасности

1. ✅ HTTPS настроен и работает
2. ✅ HTTP автоматически перенаправляется на HTTPS
3. ✅ Настроены security headers
4. ✅ Включен HSTS
5. ⚠️  Регулярно обновляйте Docker образы
6. ⚠️  Настройте автоматические бэкапы

## 📈 Мониторинг

### Проверить использование ресурсов:

```bash
docker stats promentor-rudn
```

### Проверить размер образа:

```bash
docker images | grep promentor
```

## 🆘 Поддержка

При возникновении проблем:
1. Проверьте логи контейнера
2. Проверьте конфигурацию nginx
3. Убедитесь, что порты 80 и 443 открыты
4. Проверьте валидность SSL сертификатов

---

**Удачного деплоя! 🚀**
