import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
* Tr lang terms
* @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangTrBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangTrBehavior = {
	tr: {
		'addCriteriaGroup': 'Kriter Grubu Ekle',
		'addCriterion': 'Kriter Ekle',
		'addFeedback': 'Geri Bildirim Ekle',
		'addLevel': 'Seviye Ekle',
		'addLevelPrepend': '{name} öncesine yeni bir seviye ekle',
		'addLevelAppend': '{name} sonrasına yeni bir seviye ekle',
		'addOverallLevelAppend': '{name} sonrasına yeni bir genel seviye ekle',
		'addOverallLevelPrepend': '{name} öncesine yeni bir genel seviye ekle',
		'cellPoints': 'Kriter hücresi puanları',
		'changeScoringSuccessful': 'Puanlama yöntemi {method} olarak değiştirildi',
		'clearOverride': 'Etkisizleştirmeyi Temizle',
		'clearFeedback': 'Geri Bildirimi Temizle',
		'criterionAdded': 'Yeni bir kriter eklendi',
		'criterionAriaLabel': '{index, number}/{count, number} kriter',
		'criterionDeleted': '{name} kriteri silindi',
		'criterionDescriptionAriaLabel': '{criterionName} kriteri için açıklama, seviye: {levelName}',
		'criterionFeedback': 'Kriter Geri Bildirimi',
		'criterionFeedbackAriaLabel': '{criterionName} kriteri için geri bildirim, seviye: {levelName}',
		'criterionNameAriaLabel': 'Kriter adı',
		'criterionOutOf': '{name} kriteri, {value} puan üzerindendir',
		'criterionPlaceholder': 'Kriteri düzenlemek için tıklayın',
		'dashOutOf': '— / {outOf}',
		'description': 'Açıklama',
		'descriptionInfo': 'Kişisel referansınız için bir açıklama ekleyin. Öğrencilerle paylaşılmayacaktır',
		'descriptionSaveFailed': 'Açıklama kaydedilemedi',
		'editFeedback': 'Geri Bildirimi Düzenle',
		'errorText': 'Üzgünüz! Bağlantı kurulurken bir sorunla karşılaşıldı. Sayfayı yenileyin veya daha sonra tekrar deneyin.',
		'feedback': 'Geri Bildirim',
		'feedbackSaveFailed': 'Geri bildirim kaydedilemedi',
		'groupAdded': 'Yeni bir kriter grubu eklendi',
		'groupName': 'Kriter grubu adı',
		'groupRegion': '{name} kriter grubu',
		'helpAssociations': 'İlişkiler nelerdir?',
		'hideScore': 'Puanları öğrencilerden gizle',
		'hideScoreHeader': 'Puan Görünürlüğü',
		'levelAchieved': 'Ulaşılan Seviye: ',
		'levelAppended': '{name} sonrasına yeni bir seviye eklendi',
		'levelDeleted': '{name} seviyesi silindi',
		'levelName': 'Seviye adı',
		'levelNameAndPoints': '{levelName} - {number} {number, plural, one {puan} other {puan}}',
		'levelNameAndPercentage': '%{levelName} - {number}',
		'levelPoints': 'Seviye puanları',
		'levelPrepended': '{name} öncesine yeni bir seviye eklendi',
		'name': 'Ad',
		'nameIsRequired': 'Ad gerekli',
		'nameSaveFailed': 'Ad kaydedilemedi',
		'options': 'Seçenekler',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': '{levelName} seviyesi için genel açıklama',
		'overallFeedback': 'Genel Geri Bildirim',
		'overallFeedbackAriaLabel': '{levelName} seviyesi için genel geri bildirim',
		'overallLevelDeleted': '{name} genel seviyesi silindi',
		'overallLevelName': 'Genel seviye adı',
		'overallScoreDescription': 'Her gönderi, genel rubrik puanına göre bir başarı seviyesine atanır.',
		'overallScoreHeader': 'Toplam Puan',
		'overallScore': 'Toplam Puan',
		'overriddenScoreTip': 'Kriter puanı etkisizleştirildi',
		'overriddenTotalScoreTip': 'Toplam rubrik puanı etkisizleştirildi. Puan, şu andan itibaren rubrik üzerinde yapılan değişikliklere bağlı olarak güncellenmeyecek.',
		'points': '{number} {number, plural, one {puan} other {puan}}',
		'pointsAbbreviation': 'puan',
		'pointsAreRequired': 'Puan değeri gereklidir',
		'pointsMinimum': 'En az {number} {number, plural, one {puan} other {puan}}',
		'pointsSaveFailed': 'Puan kaydedilemedi',
		'percentage': '%{number}',
		'preview': 'Önizleme',
		'initialFeedback': 'İlk Geri Bildirim',
		'refreshText': 'sayfayı yenile',
		'removeCriterion': '{name} Kriterini Kaldır',
		'removeLevel': '{name} Seviyesini Kaldır',
		'removeOverallLevel': '{name} Genel Seviyesini Kaldır',
		'reverseLevelOrder': 'Seviye Sırasını Tersine Çevir',
		'reverseLevelsSuccessful': 'Seviye sırası tersine çevrildi',
		'rubricLoadingErrorAriaAlert': 'Rubrik yüklenirken bir sorun oluştu. Görüntülenemiyor.',
		'rubricLoadingErrorMessage': 'Üzgünüz; rubrik görüntülenemedi.',
		'rubricSavingErrorAriaAlert': 'Rubrik kaydedilirken bir sorun oluştu.',
		'rubricSavingErrorMessage': 'Bir sorun oluştu. Lütfen rubriği kontrol edin.',
		'rubricSummaryA11y': 'Bu tablo, ilk sütundaki kriter ve kriter grubu adlarını listeler. İlk satır seviye adlarını listeler ve rubrik sayısal bir puanlama yöntemi kullanıyorsa puanları içerir.',
		'rubricVisibility': 'Rubrik Görünürlüğü',
		'rubricVisibilityAlways': 'Rubrik, öğrenciler tarafından görülebilir',
		'rubricVisibilityOnceFeedbackPosted': 'Rubrik, geri bildirim yayımlanana kadar öğrencilerden gizlendi',
		'rubricVisibilityNever': 'Rubrik, öğrencilerden gizlendi',
		'rubricVisibilitySaveFailed': 'Rubrik görünürlüğünü değiştirme işlemi başarısız oldu.',
		'scoreOutOf': '{score} / {outOf}',
		'scoring': 'Puanlama: {method}',
		'setScoreVisibilityFailed': 'Puan görünürlüğünü ayarlama işlemi başarısız oldu.',
		'scoresVisibilityHidden': 'Puanlar öğrencilerden gizlendi',
		'scoresVisibilityVisible': 'Puanlar öğrenciler tarafından görülebilir',
		'statistics': 'İstatistikler',
		'total': 'Toplam',
		'totalScoreAriaLabel': 'Rubrik, toplam {value} puandan oluşur.',
		'moveCriterionUp': 'Kriteri {position} yukarı taşı',
		'moveCriterionDown': 'Kriteri {position} aşağı taşı',
		'criterionMoved': '{name} artık bir kriter {position}',
		'rangeStartOrMore': 'veya daha fazlası',
		'overallLevelRangeStart': 'Genel Seviye Başlangıç Aralığı',
		'rangeStartRequired': 'Aralık Başlangıç değeri gereklidir',
		'rangeStartInvalid': 'Aralık Başlangıç değeri geçersiz',
		'closeDialog': 'Kapat',
		'deleteConfirmationYes': 'Sil',
		'deleteConfirmationNo': 'İptal',
		'deleteLevelConfirmationTitle': 'Bu seviye silinsin mi?',
		'deleteLevelConfirmationText': 'Bu eylem, bu seviyeyi ve içeriğini kalıcı olarak silecek.',
		'deleteCriterionConfirmationTitle': 'Bu kriter silinsin mi?',
		'deleteCriterionConfirmationText': 'Bu eylem, bu kriteri ve içeriğini kalıcı olarak silecek.',
		'rubricType': 'Tür: {rubricType}',
		'changeRubricTypeSuccessful': 'Rubrik türü {rubricType} olarak değiştirildi',
		'changeConfirmationYes': 'Devam',
		'changeConfirmationNo': 'İptal',
		'changeRubricTypeWarnTitle': 'Rubrik türü değiştirilsin mi?',
		'changeRubricTypeWarnMessage': 'Analitik rubrik türünüzü holistik olarak değiştirmek veri kaybına neden olabilir.',
		'rubricStatus': 'Durum: {status}',
		'changeRubricStatusSuccessful': 'Rubrik durumu {status} olarak değiştirildi',
		'editRubric': 'Rubriği Düzenle',
		'advancedAvailabilityHeader': 'Gelişmiş Kullanılabilirlik',
		'newAssociationLabel': 'Şurada yeni ilişkilere izin ver',
		'associationsSaveFailed': 'İlişkiler kaydedilemedi',
		'descriptionReadOnlyMode': 'Açıklama (Öğrencilere görünmez)',
		'descriptionReadOnlyPlaceholder': 'Açıklama yok',
		'groupNameSaveFailed': 'Kriter grubu adını kaydetme işlemi başarısız oldu'
	}
};