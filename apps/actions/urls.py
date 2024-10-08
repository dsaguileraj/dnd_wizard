from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r"armor", views.ArmorViewSet)
router.register(r"equipment", views.AdventureGearViewSet)
router.register(r"spell", views.SpellViewSet)
router.register(r"tool", views.ToolViewSet)
router.register(r"trinket", views.TrinketViewSet)
router.register(r"weapon", views.WeaponViewSet)

urlpatterns = [
    path("", include(router.urls))
]
