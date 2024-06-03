from rest_framework.routers import DefaultRouter
from .views import AdventurerEquipmentViewSet, ArmorViewSet, PropertyViewSet, SpellViewSet, ToolViewSet, WeaponViewSet

router = DefaultRouter()

router.register('equipment', AdventurerEquipmentViewSet, 'equipment')
router.register('armor', ArmorViewSet, 'armor')
router.register('property', PropertyViewSet, 'property')
router.register('spell', SpellViewSet, 'spell')
router.register('tool', ToolViewSet, 'tool')
router.register('weapon', WeaponViewSet, 'weapon')

urlpatterns = router.urls
