# gunicorn_config.py

# Bind to a specific IP and port
bind = "0.0.0.0:444"

# Number of worker processes
workers = (2 * 12) + 1  # (2 * CPU cores + 1)

# Worker class (default is 'sync')
worker_class = "sync"

# Timeout for workers
timeout = 30

# Enable logging
accesslog = "-"
errorlog = "-"

# Log level
loglevel = "info"

# Preload the application for faster worker startup
preload_app = True