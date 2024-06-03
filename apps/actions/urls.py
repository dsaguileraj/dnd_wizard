from rest_framework.routers import DefaultRouter
from .views import AdventurerEquipmentViewSet, ArmorViewSet, PropertyViewSet, SpellViewSet, ToolViewSet, WeaponViewSet

router = DefaultRouter()

router.register(r'equipment', AdventurerEquipmentViewSet, 'equipment')
router.register(r'armor', ArmorViewSet, 'armor')
router.register(r'property', PropertyViewSet, 'property')
router.register(r'spell', SpellViewSet, 'spell')
router.register(r'tool', ToolViewSet, 'tool')
router.register(r'weapon', WeaponViewSet, 'weapon')

urlpatterns = router.urls
