from django.contrib import admin
from . import models

admin.site.register(models.EntityClass)
admin.site.register(models.Race)
admin.site.register(models.Background)
admin.site.register(models.ProgressTable)
