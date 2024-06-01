from rest_framework import permissions, serializers, viewsets
from .models import Background, Bond, Feature, Flaw, Ideal, Language, Personality, Proficiency


# Background
class BackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Background
        fields = '__all__'


class BackgroundViewSet(viewsets.ModelViewSet):
    queryset = Background.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BackgroundSerializer


# Bond
class BondSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bond
        fields = '__all__'


class BondViewSet(viewsets.ModelViewSet):
    queryset = Bond.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BondSerializer

# Feature
class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = '__all__'


class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = FeatureSerializer

# Flaw
class FlawSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flaw
        fields = '__all__'


class FlawViewSet(viewsets.ModelViewSet):
    queryset = Flaw.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = FlawSerializer

# Ideal
class IdealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ideal
        fields = '__all__'


class IdealViewSet(viewsets.ModelViewSet):
    queryset = Ideal.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = IdealSerializer

# Language
class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = LanguageSerializer

# Personality
class PersonalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Personality
        fields = '__all__'


class PersonalityViewSet(viewsets.ModelViewSet):
    queryset = Personality.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PersonalitySerializer

# Proficiency
class ProficiencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Proficiency
        fields = '__all__'


class ProficiencyViewSet(viewsets.ModelViewSet):
    queryset = Proficiency.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProficiencySerializer
