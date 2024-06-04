from django.contrib import admin
from . import models

admin.site.register(models.Character)
admin.site.register(models.EntityClass)
admin.site.register(models.Monster)
admin.site.register(models.Race)
