from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r'equipment', views.AdventurerEquipmentViewSet)
router.register(r'armor', views.ArmorViewSet)
router.register(r'property', views.PropertyViewSet)
router.register(r'spell', views.SpellViewSet)
router.register(r'tool', views.ToolViewSet)
router.register(r'weapon', views.WeaponViewSet)

urlpatterns = [
    path('', include(router.urls))
]
