from rest_framework.routers import DefaultRouter
from .views import CharacterViewSet, EntityClassViewSet, MonsterViewSet, RaceViewSet

router = DefaultRouter()

router.register(r'character', CharacterViewSet, 'character')
router.register(r'class', EntityClassViewSet, 'class')
router.register(r'monster', MonsterViewSet, 'monster')
router.register(r'race', RaceViewSet, 'race')

urlpatterns = router.urls
