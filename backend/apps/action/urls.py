from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r"weapon", views.WeaponViewSet)

urlpatterns = [
    path('', include(router.urls))
]
