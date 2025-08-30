export const schoolUpData = {
  mainTabs: [
    {
      id: "admin",
      label: "Espace Admin",
      icon: "/user-square.svg",
      primaryBgClass: "bg-[#3879F0]",
      lightBgClass: "bg-[#DEEAFF]",
      primaryTextClass: "text-[#3879F0]",
      lightTextClass: "text-[#DEEAFF]",
      whiteTextClass: "text-[#FFF]",
      subTabs: [
        { id: "dashboard", label: "Tableau de bord" },
        { id: "schedule", label: "Emploi du temps" },
        { id: "fees", label: "Rapport des frais" },
        { id: "invoice", label: "Overview facture" },
        { id: "evaluation", label: "Système d'évaluation" },
        { id: "grades", label: "Saisie de Notes" },
        { id: "forms", label: "Création des formulaires" },
        { id: "reports", label: "Bulletin de Notes" },
      ],
      featuresBySubTab: {
        dashboard: {
          features: [
            {
              title: "Aperçu global de l’établissement :",
              description:
                "Nombre de classes, d’enseignants, d’élèves et de parents. Timeline scolaire visuelle avec les dates clés.",
            },
            {
              title: "Gestion financière :",
              description:
                "Suivi des factures : montant total facturé, payé, restant à payer, prévisions.",
            },
            {
              title: "Événements et agenda :",
              description:
                "Affichage des réunions de parents, journées portes ouvertes, remises de bulletins.",
            },
            {
              title: "Présences en temps réel :",
              description:
                "Nombre d’absences justifiées, non justifiées, expulsions, retards, appels faits ou non.",
            },
            {
              title: "Liste des tâches administratives :",
              description:
                "Suivi des inscriptions et admissions, planification des horaires et emplois du temps, suivi des absences et retards.",
            },
            {
              title: "Bloc notes et rappels internes :",
              description:
                "Informations sur les conseils, comités, et événements à venir. Anniversaires des élèves et enseignants.",
            },
            {
              title: "Multilingue :",
              description:
                "School-UP supporte plusieurs langues pour s’adapter à chaque utilisateur.",
            },
          ],
          image: "/admin/dashboard-preview.png",
        },
        schedule: {
          features: [
            {
              title: "Création et gestion des emplois du temps :",
              description:
                "Ajout de cours, matières, enseignants et salles\nGestion par niveau, classe et matière\nVisualisation quotidienne, hebdomadaire, globale",
            },
            {
              title: "Planification centralisée :",
              description:
                "Coordination entre enseignants, disponibilités de salles et besoins pédagogiques\nÉvitement des conflits d'horaire",
            },
            {
              title: "Suivi des séances en temps réel :",
              description:
                "Présence/absence des enseignants\nAppels non effectués",
            },
            {
              title: "Présences en temps réel :",
              description:
                "Nombre d'absences justifiées, non justifiées, expulsions, retards, appels faits ou non",
            },
            {
              title: "Organisation modulaire :",
              description:
                "Adaptation aux changements d'horaires\nAjustements dynamiques (absences, remplacements)",
            },
            {
              title: "Connexion directe avec les autres espaces",
              description:
                "Les mises à jour sont visibles instantanément\nNotifications automatiques envoyées à tous les utilisateurs concernés",
            },
          ],
          image: "/admin/schedule-preview.png",
        },
        fees: {
          features: [
            {
              title: "Navigation des sous-menus :",
              description:
                "Onglets interactifs\nRapport des frais\nFrais Standard\nLes échéances\nFrais Individuels",
            },
            {
              title: "Statistiques globales :",
              description:
                "Montant Total Facturé\nMontant Total Payé\nReste à Payer\nEn attente (prévu à facturer)\nÀ facturer",
            },
            {
              title: "Frais :",
              description:
                "Frais préconfigurés\nFrais individuels\nGraphiques des frais individuels (payés, non payés, en attente...)\nListe des principaux frais (scolarité, transport, etc.) avec pourcentages\nÉvolution mensuelle des frais facturés et payés",
            },
          ],
          image: "/admin/fees-preview.png",
        },
        invoice: {
          features: [
            {
              title: "Navigation des sous-menus :",
              description:
                "Overview : Vue synthétique des montants globaux et répartition des paiements.\nListe des factures : Affichage détaillé ligne par ligne avec filtres et recherche.\nPaiement : Suivi des paiements enregistrés par période.",
            },
            {
              title: "Statistiques globales :",
              description:
                "Montant Total Facturé\nMontant Total Payé\nReste à Payer\nEn attente\nÀ facturer",
            },
            {
              title: "Factures :",
              description:
                "Liste des factures :\nDétails par utilisateur (nom, date d'émission, montant, payé, statut).\nStatuts colorés : Payé, Non payé, Partiellement payé.\nActions : Vue, édition, suppression.\nTotaux en bas du tableau : Somme des montants.\nSélecteur de mois (à droite) : Permet de switcher dynamiquement entre les mois de l'année 2024.\nExemple : actuellement sélectionné → Mars 2024\nAffiche les données correspondantes à chaque mois",
            },
          ],
          image: "/admin/invoice-preview.png",
        },
        evaluation: {
          features: [
            {
              title: "Statistiques globales :",
              description:
                "Moyenne Générale\nHaute Moyenne\nMoyenne Minimale\nNombre total d'élèves\nProgression des saisies",
            },
            {
              title: "Outils de gestion des documents :",
              description:
                "Bulletin de notes : Consultation et génération facile.\nRelevé de notes : Visualisation et téléchargement personnalisable.\nBulletin Final : Résumé complet des résultats.\nCertificat : Génération et téléchargement des certificats d'élèves.",
            },
            {
              title: "Détails par classe :",
              description:
                "Classes affichées : Répétition de la même classe pour plusieurs modules (1ère année, Classe A).\nIndicateurs par classe\nMoyenne générale\nMoyenne max\nMoyenne min\nNombre d'élèves\nÉtat de saisie des notes et combien en attente",
            },
          ],
          image: "/admin/evaluation-preview.png",
        },
        grades: {
          features: [
            {
              title: "Tableau de saisie :",
              description:
                "Colonnes principales :\nNom & prénom des élèves\nClasse\nMoyenne individuelle\nColonnes de dates des examens\nNotation par Types des notes",
            },
            {
              title: "Statistiques à droite :",
              description:
                "Niveau\nMoyenne Générale\nHaute Moyenne : Élève identifié\nMoyenne Minimale : Élève identifié\nProgression des saisies",
            },
            {
              title: "Ajout d'un examen :",
              description:
                'Ajoutez une nouvelle épreuve grâce au bouton "+" situé à côté des dates, en fonction du système d\'évaluation sélectionné, de la période, de la classe, du dossier de notation et de la matière.',
            },
          ],
          image: "/admin/grades-preview.png",
        },
        forms: {
          features: [
            {
              title: "Création de formulaires personnalisés :",
              description:
                "Conception de tout type de formulaires : inscriptions, enquêtes, sondages, questionnaires internes, évaluations.",
            },
            {
              title: "Templates prêts à l'emploi :",
              description:
                "Bibliothèque de modèles prédéfinis (formulaire d'inscription, enquête parents, évaluation élèves, etc.) pour gagner du temps.",
            },
            {
              title: "Champs variés et configurables :",
              description:
                "Texte, listes déroulantes, cases à cocher, dates, pièces jointes, photos, signatures électroniques.",
            },
            {
              title: "Ajout de documents & médias :",
              description:
                "Import et attachement de fichiers, images ou vidéos directement dans le formulaire.",
            },
            {
              title: "Analyse et suivi en temps réel :",
              description:
                "Collecte centralisée des réponses, affichage de statistiques et export des résultats pour un traitement rapide.",
            },
            {
              title: "Accessibilité & compatibilité :",
              description:
                "Formulaires accessibles sur web et mobile, avec sauvegarde sécurisée des données et mise à jour instantanée.",
            },
          ],
          image: "/admin/forms-preview.png",
        },
        reports: {
          features: [
            {
              title: "Création de formulaires personnalisés :",
              description:
                "Conception de tout type de formulaires : inscriptions, enquêtes, sondages, questionnaires internes, évaluations.",
            },
            {
              title: "Templates prêts à l'emploi :",
              description:
                "Bibliothèque de modèles prédéfinis (formulaire d'inscription, enquête parents, évaluation élèves, etc.) pour gagner du temps.",
            },
            {
              title: "Champs variés et configurables :",
              description:
                "Texte, listes déroulantes, cases à cocher, dates, pièces jointes, photos, signatures électroniques.",
            },
            {
              title: "Ajout de documents & médias :",
              description:
                "Import et attachement de fichiers, images ou vidéos directement dans le formulaire.",
            },
            {
              title: "Analyse et suivi en temps réel :",
              description:
                "Collecte centralisée des réponses, affichage de statistiques et export des résultats pour un traitement rapide.",
            },
            {
              title: "Accessibilité & compatibilité :",
              description:
                "Formulaires accessibles sur web et mobile, avec sauvegarde sécurisée des données et mise à jour instantanée.",
            },
          ],
          image: "/admin/forms-preview.png",
        },
      },
    },
    {
      id: "teacher",
      label: "Espace Enseignant",
      icon: "/briefcase.svg",
      primaryBgClass: "bg-[#A068AE]",
      lightBgClass: "bg-[#F6EAFE]",
      primaryTextClass: "text-[#A068AE]",
      lightTextClass: "text-[#F6EAFE]",
      whiteTextClass: "text-[#FFF]",
      subTabs: [
        { id: "dashboard", label: "Tableau de bord" },
        { id: "schedule", label: "Dévoir à la maison" },
        { id: "grades", label: "Messures Disciplinaires" },
        { id: "evaluation", label: "Gestion des examens" },
        { id: "reports", label: "saisie des appréciations" },
      ],
      featuresBySubTab: {
        dashboard: {
          features: [
            {
              title: "Emploi du temps & séances de cours :",
              description:
                "Accès rapide aux prochaines séances, matières, classes, horaires et salles, avec alertes en cas d’absence d’enseignant.",
            },
            {
              title: "Gestion des devoirs :",
              description:
                "Création, assignation et suivi des devoirs avec consignes détaillées, organisés par jour, semaine et mois.",
            },
            {
              title: "Suivi des élèves :",
              description:
                "Consultation des listes de classe, suivi individuel des élèves et accès aux détails de leurs performances.",
            },
            {
              title: "Appels de présence :",
              description:
                "Saisie des présences en temps réel avec indicateurs sur absences justifiées, non justifiées, retards et expulsions, plus suivi des appels non faits.",
            },
            {
              title: "Historique de présence :",
              description:
                "Vue sur les dernières présences/absences par matière et par séance, pour un suivi pédagogique précis.",
            },
            {
              title: "Agenda & événements :",
              description:
                "Intégration des événements scolaires : réunions de parents, journées portes ouvertes, remises de bulletins, etc.",
            },
          ],
          image: "/teacher/dashboard-preview.png",
        },
        schedule: {
          features: [
            {
              title: "Recherche & filtres intelligents :",
              description:
                "Filtrer les devoirs par matière, classe, date ou élève, et rechercher facilement un exercice spécifique.",
            },
            {
              title: "Détails des devoirs :",
              description:
                "Accès aux consignes complètes, aux questions et aux documents associés pour chaque matière.",
            },
            {
              title: "Suivi par élève et par classe :",
              description:
                "Association des devoirs à des élèves ou classes précises (ex. 1ère année A, 2ème année A), avec suivi de remise.",
            },
            {
              title: "Multi-matières :",
              description:
                "Gestion des devoirs pour toutes les disciplines (sciences, français, géographie, anglais, technologie...). Ajustements dynamiques (absences, remplacements).",
            },
            {
              title: "Indicateurs de progression :",
              description:
                "Nombre de devoirs pour aujourd’hui, cette semaine et ce mois, pour un suivi simplifié.",
            },
            {
              title: "Création de devoirs :",
              description:
                "Les enseignants peuvent ajouter un devoir en quelques clics avec un titre, une description et des consignes précises.",
            },
            {
              title: "Affectation ciblée :",
              description:
                "Attribution possible à une classe entière, à un groupe d’élèves ou à un élève spécifique selon le besoin pédagogique.",
            },
            {
              title: "Ajout de ressources :",
              description:
                "Possibilité de joindre des documents (PDF, Word, etc.), des images, ou des supports multimédia pour enrichir le devoir.",
            },
          ],
          image: "/teacher/dashboard-preview.png",
        },
        grades: {
          features: [
            {
              title: "Encouragements :",
              description:
                "Permet de féliciter un élève pour ses efforts ou ses résultats, avec des messages personnalisés.",
            },
            {
              title: "Observations :",
              description:
                "Suivi des attitudes ou comportements à améliorer, notés par l'enseignant pour garder un historique.",
            },
            {
              title: "Punitions :",
              description:
                "Gestion des sanctions (ex. exclusion de cours), avec enregistrement de la date, du motif et du contexte.",
            },
            {
              title: "Statistiques rapides :",
              description:
                "Vue instantanée du nombre total d'encouragements, observations et punitions par élève ou par classe.",
            },
            {
              title: "Historique complet :",
              description:
                "Chaque remarque (positive ou négative) est enregistrée et consultable pour suivre l'évolution du comportement de l'élève.",
            },
            {
              title: "Tri & filtres :",
              description:
                "Possibilité de trier les remarques par type (encouragement, observation, punition), par date ou par élève.",
            },
          ],
          image: "/teacher/evaluation-preview.png",
        },
        evaluation: {
          features: [
            {
              title: "Gestion des examens :",
              description:
                "Liste des examens : affichage des examens programmés avec détails. Ajout d'examen : possibilité d'ajouter un nouvel examen. Détails d'un examen",
            },
            {
              title: "Gestion des notes :",
              description:
                "Saisie des notes : possibilité de rentrer les notes des élèves. Aperçu des notes : visualiser les notes déjà saisies. Publication des notes : option de publier les notes (/20). Filtrage et recherche : trier ou rechercher un élève ou un examen. Progression des saisies : pourcentage de notes déjà saisies.",
            },
            {
              title: "Planification et configuration :",
              description:
                "Planification des examens (date, heure, salle). Mode d'évaluation (TalentGauge, système d'évaluation interne...). Catégorie et type de l'examen (DS, contrôle...).",
            },
          ],
          image: "/teacher/evaluation-preview.png",
        },
        reports: {
          features: [
            {
              title: "Saisie des appréciations :",
              description:
                "Possibilité d'écrire un commentaire ou une appréciation pour chaque élève ou groupe d'élèves. Affichage du niveau scolaire concerné (ex. : 1ère année - A, 3ème année, 4ème année). Sélection de la matière pour laquelle on saisit l'appréciation (ex. : Langues). Possibilité de filtrer ou rechercher un élève ou un groupe de niveaux/classes.",
            },
            {
              title: "Suivi de la progression :",
              description:
                "Indicateur de progression des saisies (ex. : 50/25 ou 80%). Moyenne des élèves pour la matière/section affichée (ex. : Moyenne : 15.40). Suivi des absences, retards, expulsions.",
            },
            {
              title: "Publication des appréciations :",
              description:
                "Option de publier les appréciations saisies. Possibilité de voir la progression avant publication pour s'assurer que toutes les appréciations ont été saisies.",
            },
          ],
          image: "/teacher/evaluation-preview.png",
        },
      },
    },
    {
      id: "parent",
      label: "Espace Parent",
      icon: "/people-1.svg",
      primaryBgClass: "bg-[#FF9F51]",
      lightBgClass: "bg-[#FFE4CE]",
      primaryTextClass: "text-[#FF9F51]",
      lightTextClass: "text-[#FFE4CE]",
      whiteTextClass: "text-[#FFF]",
      subTabs: [
        { id: "dashboard", label: "Tableau de bord" },
        { id: "fees", label: "Finance" },
        { id: "schedule", label: "Mesures Dicplinaires" },
        { id: "Presence", label: "Présences" },
        { id: "Examens", label: "Examens" },
        { id: "Resultat", label: "Resultat & notes - Documents" },
      ],
      featuresBySubTab: {
        dashboard: {
          features: [
            {
              title: "Accueil / Vue générale :",
              description:
                "Résumé rapide des éléments à venir : devoirs à la maison, prochaines séances, événements.",
            },
            {
              title: "Emploi du temps",
              description:
                "Liste des prochaines séances avec date, horaire, enseignant responsable et statut (Présent, à venir, Enseignant absent).",
            },
            {
              title: "Suivi des présences / absences",
              description:
                "Affichage des trois dernières présences/absences pour chaque élève :  \n absence justifiée / non justifiée. \n retard. \n expulsion  \n Total d'absences, retards, expulsions sur une période.",
            },
            {
              title: "Performances académiques",
              description:
                "Suivi des notes, moyennes, rang, mention, avec historique des examens (matière, note, durée, professeur, statut et date).",
            },
            {
              title: "Gestion multi-enfants",
              description:
                "Pour les parents avec plusieurs enfants dans l'école : possibilité de switcher entre les enfants avec mise à jour automatique de toutes les données (présences, notes, appréciations, agenda, événements, informations financières).",
            },
          ],
          image: ["/parent/dashboard-preview.png","/parent/dashboard-preview.png"],
        },
        fees: {
          features: [
            {
              title: "Suivi des frais et paiements",
              description:
                "Liste des frais facturés : frais d’inscription, frais de scolarité, frais de transport, frais de club, autres frais complémentaires Pour chaque facture : Description du frais. Occurrence (mensuelle, annuelle, etc.). Montant total facturé. Montant payé et montant impayé. Date d’échéance et date de paiement. Méthode de paiement (espèces, chèque, virement bancaire…). Statut du paiement (payée, partiellement payée, en attente de validation, non payée, validée)."
            },
            {
              title: " Abonnement / Paiements récurrents",
              description: "Possibilité de s’abonner à certains frais pour gérer les paiements mensuels automatiquement.",
            },
            {
              title: "Résumé des actions possibles",
              description: " Consulter toutes les factures et suivre le paiement de chaque frais. Vérifier les montants payés et impayés. Voir le détail des paiements (méthode et date).",
            },
          ],
          image: ["/parent/dashboard-preview.png","/parent/dashboard-preview.png"],
        },
        schedule: {
          features: [
            {
              title: "Consultation des mesures disciplinaires :",
              description: "Liste des mesures disciplinaires de l’élève : Encouragements Observations Punitions (ex. : exclusion de cours) Pour chaque mesure : Date de l’événement. Commentaire ou note de l’enseignant. Nom de l’enseignant ayant pris la mesure."
            },
            {
              title: "Filtrage et tri :",
              description: "Filtre par type de mesure (Encouragement, Observation, Punition). Recherche par mot-clé ou date. Tri possible pour mieux organiser l’affichage.",
            },
          ],
          image: ["/parent/dashboard-preview.png","/parent/dashboard-preview.png"],
        },
        Presence: {
          features: [
            {
              title: "Consultation des présences et absences :",
              description: "Liste des présences et absences de l’enfant avec :\n Matière et cours concerné. \n Statut :\n Absence justifiée \n Absence non justifiée \n Retard \n Expulsion \n Date et horaire du cours."
            },
            {
              title: "Résumé général",
              description: "Total cours \n Absences justifiées \n Absences non justifiées \n Retards \n Expulsions",
            },
            {
              title: "Filtrage et tri",
              description: "Possibilité de filtrer par matière ou statut de présence.\n Recherche par mot-clé ou date.\n Tri pour organiser l’affichage des éléments facilement.",
            },
          ],
          image: ["/parent/dashboard-preview.png","/parent/dashboard-preview.png"],
        },
        Examens: {
          features: [
            {
              title: " Consultation des examens",
              description: "Affichage du calendrier des examens de l’enfant.\n Détails de chaque examen :\n Matière et sous-matière\n Date et horaire\nType d’examen (DS, Contrôle…) \n Coefficient\n Note obtenue\n Statut (Passé, À venir, Évaluable)\nSystème d’évaluation utilisé (ex. : EduCheck → TalentGauge)"
            },
            {
              title: "Suivi des performances",
              description: "Visualiser la moyenne de l’enfant pour chaque matière ou examen.\n Comparer les examens passés et les notes publiées.",
            },
            {
              title: " Résumé des actions possibles",
              description: "Consulter le calendrier complet des examens.\n Vérifier les notes publiées et les examens passés.\n Suivre les examens à venir et leur éligibilité à l’évaluation.\n Filtrer, trier et rechercher des examens pour un suivi personnalisé.",
            },
          ],
          image: ["/parent/dashboard-preview.png","/parent/dashboard-preview.png"],
        },
        Resultat: {
          features: [
            {
              title: "Consultation des documents scolaires",
              description: "Accès aux différents types de documents :\n Bulletin de notes\n Relevé de notes\n Bulletin final\n Certificat\n Affichage par période scolaire ou trimestre.\n Indication du niveau de l’enfant et du système d’évaluation utilisé (ex. : EduCheck → TalentGauge)."
            },
            {
              title: " Export et partage",
              description: "Possibilité d’exporter les bulletins ou relevés au format PDF.\n Visualisation de la date de soumission des documents",
            },
            {
              title: "Résumé des actions possibles",
              description: "Consulter tous les documents de notes et résultats de l’enfant.\n Filtrer et rechercher facilement un bulletin ou relevé précis.\nTélécharger ou exporter les documents pour archivage ou impression.\nSuivre l’historique des bulletins soumis et validés.",
            },
          ],
          image: ["/parent/dashboard-preview.png","/parent/dashboard-preview.png"],
        },
      },
    },
    {
      id: "student",
      label: "Espace Élève",
      icon: "/teacher-1.svg",
      primaryBgClass: "bg-[#F37F73]",
      lightBgClass: "bg-[#FDE5E3]",
      primaryTextClass: "text-[#F37F73]",
      lightTextClass: "text-[#FDE5E3]",
      whiteTextClass: "text-[#FFF]",
      subTabs: [
        { id: "dashboard", label: "Tableau de bord" },
        { id: "messagerie", label: "Messagerie" },
        { id: "grades", label: "Emploi de temps" },
        { id: "homework", label: "Dévoir à la maison" },
      ],
      featuresBySubTab: {
        dashboard: {
          features: [
            {
              title: "Tableau de bord / Informations rapides",
              description:
                "Écoles et clubs : ÉclatVif, SparkKids, CréaFun.\n Évènements et actualités : visualisation des événements scolaires à venir, calendrier, actualités de la scolarité.\nEmploi du temps et séances : prochaines séances avec matières, horaires, salles et enseignants.\nPrésence : statut (présent, retard, absence justifiée/non justifiée, expulsion).\nDevoirs à la maison : suivi des devoirs par matière et date de rendu.\nDocuments scolaires : bulletins, relevés, certificats.\nPerformances académiques : moyenne générale, rang dans la classe, mention, système d’évaluation utilisé.\nExamens : notes obtenues, durée, professeur, statut (complet / à faire), calendrier des examens.\nMesures disciplinaires : encouragements, observations, punitions avec commentaires et date.\nFinance : suivi des frais, paiements effectués et impayés",
            },
            {
              title: "Résumé des actions principales pour l’élève",
              description:
                "Consulter son emploi du temps et suivre les prochaines séances.\nVérifier les présences et absences.\nAccéder à ses devoirs et documents scolaires.\nSuivre ses résultats et performances académiques.\nConsulter les mesures disciplinaires.\nSuivre les événements et réunions à venir.\nConsulter ses frais et paiements.\nRecevoir et gérer notifications et messages.",
            },
          ],
          image: ["/student/dashboard-preview.png","/student/dashboard-preview.png"],
        },
        messagerie: {
          features: [
            {
              title: "Messagerie et discussions",
              description:
                "Échanges en temps réel avec enseignants, parents et administration.\nCréer de nouvelles discussions pour des sujets spécifiques.\nInviter ou retirer des membres dans une conversation (enseignants, parents, administrateurs).\nGestion des membres actifs : voir qui est en ligne et le statut de chaque participant.",
            },
            {
              title: "Options multimédias",
              description:
                "Envoyer et recevoir des fichiers : PDF, PPT, Excel, images, vidéos.\nEnvoyer des messages vocaux pour plus de rapidité et personnalisation.\nPartager des images ou captures d’écran liées aux devoirs, projets ou événements.\nHistorique consultable des médias partagés avec taille et date.",
            },
            {
              title: "Notifications et organisation",
              description:
                "Recevoir des notifications en temps réel pour chaque nouveau message, fichier ou demande.\nFiltrer ou rechercher des messages et fichiers par élève, date ou type.",
            },
          ],
          image: ["/student/dashboard-preview.png","/student/dashboard-preview.png"],
        },
        grades: {
          features: [
            {
              title: "Calendrier / planning",
              description:
                "Affichage par mois avec navigation entre les jours.\nVisualisation de l’emploi du temps quotidien et horaire (ex. : 08:00 - 10:00).\nIndication de la présence ou absence pour chaque séance (Présent / À venir).\nAffichage des salles de classe (ex. : Salle n° 05).",
            },
            {
              title: "Informations détaillées par séance",
              description:
                "Matière et horaire précis (ex. : Mathématique, 08:00 - 10:00).\nStatut de présence pour l’élève.\nPossibilité de filtrer ou rechercher par jour, matière ou salle.\nIndication des cours à venir et passés.",
            },
            {
              title: "Navigation et interaction",
              description:
                "Passage rapide entre les jours de la semaine (Lu, Ma, Me, Je, Ve, Sa, Di).\nVisualisation compacte des cours par créneau horaire.\nPossibilité d’intégrer alertes ou notifications pour les prochaines séances.",
            },
          ],
          image: ["/student/dashboard-preview.png","/student/dashboard-preview.png"],
        },
        homework: {
          features: [
            {
              title: "Organisation des devoirs",
              description:
                "Tri par statut : À faire / Terminés / Tous.\nFiltre et recherche pour trouver un devoir par matière, date ou nom.\nAffichage des dates clés sur une vue calendrier (ex. : 27 Novembre - 3 Décembre).",
            },
            {
              title: "Informations détaillées par devoir",
              description:
                "Matière et titre du devoir (ex. : Mathématique - Équations Linéaires).\nDescription complète avec objectifs pédagogiques et exercices.\nNom de l’enseignant responsable.\nDate d’échéance et nombre de devoirs pour la journée.\nPossibilité de voir les détails supplémentaires pour chaque devoir.",
            },
            {
              title: "Navigation",
              description:
                "Vue par semaine avec jours (Lu, Ma, Me, Je, Ve, Sa, Di).\nAccès rapide aux devoirs du jour ou des jours suivants.\nIndication des devoirs récents ou en retard..",
            },
          ],
          image: ["/student/dashboard-preview.png","/student/dashboard-preview.png"],
        },
      },
    },
  ],
};
