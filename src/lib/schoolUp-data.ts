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
              title: "Emploi du temps & séances de cours :",
              description: "Accès rapide aux prochaines séances, matières, classes, horaires et salles, avec alertes en cas d'absence d'enseignant.",
            },
            {
              title: "Gestion des devoirs :",
              description: "Création, assignation et suivi des devoirs avec consignes détaillées, organisés par jour, semaine et mois.",
            },
            {
              title: "Suivi des élèves :",
              description: "Consultation des listes de classe, suivi individuel des élèves et accès aux détails de leurs performances.",
            },
            {
              title: "Appels de présence :",
              description: "Saisie des présences en temps réel avec indicateurs sur absences justifiées, non justifiées, retards et expulsions, plus suivi des appels non faits.",
            },
            {
              title: "Historique de présence :",
              description: "Vue sur les dernières présences/absences par matière et par séance, pour un suivi pédagogique précis.",
            },
            {
              title: "Agenda & événements :",
              description: "Intégration des événements scolaires : réunions de parents, journées portes ouvertes, remises de bulletins, etc.",
            },
          ],
          image: "/admin/dashboard-preview.png",
        },
        schedule: {
          features: [
            {
              title: "Création et gestion des emplois du temps :",
              description: "Ajout de cours, matières, enseignants et salles\nGestion par niveau, classe et matière\nVisualisation quotidienne, hebdomadaire, globale",
            },
            {
              title: "Planification centralisée :",
              description: "Coordination entre enseignants, disponibilités de salles et besoins pédagogiques\nÉvitement des conflits d'horaire",
            },
            {
              title: "Suivi des séances en temps réel :",
              description: "Présence/absence des enseignants\nAppels non effectués",
            },
            {
              title: "Présences en temps réel :",
              description: "Nombre d'absences justifiées, non justifiées, expulsions, retards, appels faits ou non",
            },
            {
              title: "Organisation modulaire :",
              description: "Adaptation aux changements d'horaires\nAjustements dynamiques (absences, remplacements)",
            },
            {
              title: "Connexion directe avec les autres espaces",
              description: "Les mises à jour sont visibles instantanément\nNotifications automatiques envoyées à tous les utilisateurs concernés",
            },
          ],
          image: "/admin/schedule-preview.png", 
        },
        fees: {
          features: [
            {
              title: "Navigation des sous-menus :",
              description: "Onglets interactifs\nRapport des frais\nFrais Standard\nLes échéances\nFrais Individuels",
            },
            {
              title: "Statistiques globales :",
              description: "Montant Total Facturé\nMontant Total Payé\nReste à Payer\nEn attente (prévu à facturer)\nÀ facturer",
            },
            {
              title: "Frais :",
              description: "Frais préconfigurés\nFrais individuels\nGraphiques des frais individuels (payés, non payés, en attente...)\nListe des principaux frais (scolarité, transport, etc.) avec pourcentages\nÉvolution mensuelle des frais facturés et payés",
            },
          ],
          image: "/admin/fees-preview.png", 
        },
        invoice: {
          features: [
            {
              title: "Navigation des sous-menus :",
              description: "Overview : Vue synthétique des montants globaux et répartition des paiements.\nListe des factures : Affichage détaillé ligne par ligne avec filtres et recherche.\nPaiement : Suivi des paiements enregistrés par période.",
            },
            {
              title: "Statistiques globales :",
              description: "Montant Total Facturé\nMontant Total Payé\nReste à Payer\nEn attente\nÀ facturer",
            },
            {
              title: "Factures :",
              description: "Liste des factures :\nDétails par utilisateur (nom, date d'émission, montant, payé, statut).\nStatuts colorés : Payé, Non payé, Partiellement payé.\nActions : Vue, édition, suppression.\nTotaux en bas du tableau : Somme des montants.\nSélecteur de mois (à droite) : Permet de switcher dynamiquement entre les mois de l'année 2024.\nExemple : actuellement sélectionné → Mars 2024\nAffiche les données correspondantes à chaque mois",
            },
          ],
          image: "/admin/invoice-preview.png", 
        },
        evaluation: {
          features: [
            {
              title: "Statistiques globales :",
              description: "Moyenne Générale\nHaute Moyenne\nMoyenne Minimale\nNombre total d'élèves\nProgression des saisies",
            },
            {
              title: "Outils de gestion des documents :",
              description: "Bulletin de notes : Consultation et génération facile.\nRelevé de notes : Visualisation et téléchargement personnalisable.\nBulletin Final : Résumé complet des résultats.\nCertificat : Génération et téléchargement des certificats d'élèves.",
            },
            {
              title: "Détails par classe :",
              description: "Classes affichées : Répétition de la même classe pour plusieurs modules (1ère année, Classe A).\nIndicateurs par classe\nMoyenne générale\nMoyenne max\nMoyenne min\nNombre d'élèves\nÉtat de saisie des notes et combien en attente",
            },
          ],
          image: "/admin/evaluation-preview.png", 
        },
        grades: {
          features: [
            {
              title: "Tableau de saisie :",
              description: "Colonnes principales :\nNom & prénom des élèves\nClasse\nMoyenne individuelle\nColonnes de dates des examens\nNotation par Types des notes",
            },
            {
              title: "Statistiques à droite :",
              description: "Niveau\nMoyenne Générale\nHaute Moyenne : Élève identifié\nMoyenne Minimale : Élève identifié\nProgression des saisies",
            },
            {
              title: "Ajout d'un examen :",
              description: "Ajoutez une nouvelle épreuve grâce au bouton \"+\" situé à côté des dates, en fonction du système d'évaluation sélectionné, de la période, de la classe, du dossier de notation et de la matière.",
            },
          ],
          image: "/admin/grades-preview.png", 
        },
        forms: {
          features: [
            {
              title: "Création de formulaires personnalisés :",
              description: "Conception de tout type de formulaires : inscriptions, enquêtes, sondages, questionnaires internes, évaluations.",
            },
            {
              title: "Templates prêts à l'emploi :",
              description: "Bibliothèque de modèles prédéfinis (formulaire d'inscription, enquête parents, évaluation élèves, etc.) pour gagner du temps.",
            },
            {
              title: "Champs variés et configurables :",
              description: "Texte, listes déroulantes, cases à cocher, dates, pièces jointes, photos, signatures électroniques.",
            },
            {
              title: "Ajout de documents & médias :",
              description: "Import et attachement de fichiers, images ou vidéos directement dans le formulaire.",
            },
            {
              title: "Analyse et suivi en temps réel :",
              description: "Collecte centralisée des réponses, affichage de statistiques et export des résultats pour un traitement rapide.",
            },
            {
              title: "Accessibilité & compatibilité :",
              description: "Formulaires accessibles sur web et mobile, avec sauvegarde sécurisée des données et mise à jour instantanée.",
            },
          ],
          image: "/admin/forms-preview.png", 
        },
        reports: {
          features: [
            {
              title: "Création de formulaires personnalisés :",
              description: "Conception de tout type de formulaires : inscriptions, enquêtes, sondages, questionnaires internes, évaluations.",
            },
            {
              title: "Templates prêts à l'emploi :",
              description: "Bibliothèque de modèles prédéfinis (formulaire d'inscription, enquête parents, évaluation élèves, etc.) pour gagner du temps.",
            },
            {
              title: "Champs variés et configurables :",
              description: "Texte, listes déroulantes, cases à cocher, dates, pièces jointes, photos, signatures électroniques.",
            },
            {
              title: "Ajout de documents & médias :",
              description: "Import et attachement de fichiers, images ou vidéos directement dans le formulaire.",
            },
            {
              title: "Analyse et suivi en temps réel :",
              description: "Collecte centralisée des réponses, affichage de statistiques et export des résultats pour un traitement rapide.",
            },
            {
              title: "Accessibilité & compatibilité :",
              description: "Formulaires accessibles sur web et mobile, avec sauvegarde sécurisée des données et mise à jour instantanée.",
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
        { id: "schedule", label: "Emploi du temps" },
        { id: "grades", label: "Saisie de Notes" },
        { id: "evaluation", label: "Évaluation" },
        { id: "reports", label: "Rapports" },
      ],
      featuresBySubTab: {
        dashboard: {
          features: [
            {
              title: "Aperçu global de l'établissement :",
              description: "Nombre de classes, d'enseignants, d'élèves et de parents\nTimeline scolaire visuelle avec les dates clés",
            },
            {
              title: "Gestion financière :",
              description: "Suivi des factures : montant total facturé, payé, restant à payer, prévisions",
            },
            {
              title: "Événements et agenda :",
              description: "Affichage des réunions de parents, journées portes ouvertes, remises de bulletins",
            },
            {
              title: "Présences en temps réel :",
              description: "Nombre d'absences justifiées, non justifiées, expulsions, retards, appels faits ou non",
            },
            {
              title: "Liste des tâches administratives :",
              description: "Suivi des inscriptions et admissions\nPlanification des horaires et emplois du temps\nSuivi des absences et retards",
            },
            {
              title: "Bloc notes et rappels internes :",
              description: "Informations sur les conseils, comités, et événements à venir\nAnniversaires des élèves et enseignants",
            },
            {
              title: "Multilingue :",
              description: "School-UP supporte plusieurs langues pour s'adapter à chaque utilisateur.",
            },
          ],
          image: "/admin/dashboard-preview.png",
        },
        schedule: [
          {
            title: "Emploi du temps :",
            description: "Vue personnalisée des cours et des disponibilités",
            image: "/teacher/schedule-preview.png",
          },
        ],
        grades: [
          {
            title: "Saisie des notes :",
            description: "Entrée des notes par classe et par matière",
            image: "/teacher/grades-preview.png",
          },
        ],
        evaluation: [
          {
            title: "Évaluation des élèves :",
            description: "Création de quiz et suivi des performances",
            image: "/teacher/evaluation-preview.png",
          },
        ],
        reports: [
          {
            title: "Rapports de classe :",
            description: "Analyse des progrès des élèves par période",
            image: "/teacher/reports-preview.png",
          },
        ],
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
        { id: "schedule", label: "Emploi du temps" },
        { id: "fees", label: "Frais scolaires" },
        { id: "grades", label: "Notes" },
        { id: "reports", label: "Bulletins" },
      ],
      featuresBySubTab: {
        dashboard: [
          {
            title: "Suivi de l'élève :",
            description: "Vue d'ensemble des performances et présences de l'élève",
            image: "/parent/dashboard-preview.png",
          },
          {
            title: "Communications :",
            description: "Messages des enseignants et annonces de l'école",
            image: "/parent/communications-preview.png",
          },
        ],
        schedule: [
          {
            title: "Emploi du temps :",
            description: "Accès à l'emploi du temps de l'élève",
            image: "/parent/schedule-preview.png",
          },
        ],
        fees: [
          {
            title: "Gestion des frais :",
            description: "Vue des factures et historique des paiements",
            image: "/parent/fees-preview.png",
          },
        ],
        grades: [
          {
            title: "Notes de l'élève :",
            description: "Consultation des notes par matière",
            image: "/parent/grades-preview.png",
          },
        ],
        reports: [
          {
            title: "Bulletins :",
            description: "Téléchargement des bulletins de notes",
            image: "/parent/reports-preview.png",
          },
        ],
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
        { id: "schedule", label: "Emploi du temps" },
        { id: "grades", label: "Notes" },
        { id: "homework", label: "Devoirs" },
      ],
      featuresBySubTab: {
        dashboard: [
          {
            title: "Vue d'ensemble :",
            description: "Résumé des devoirs à rendre et des notes récentes",
            image: "/student/dashboard-preview.png",
          },
          {
            title: "Notifications :",
            description: "Rappels pour les devoirs et événements scolaires",
            image: "/student/notifications-preview.png",
          },
        ],
        schedule: [
          {
            title: "Emploi du temps :",
            description: "Vue claire des cours et activités quotidiennes",
            image: "/student/schedule-preview.png",
          },
        ],
        grades: [
          {
            title: "Mes notes :",
            description: "Accès aux notes par matière et période",
            image: "/student/grades-preview.png",
          },
        ],
        homework: [
          {
            title: "Gestion des devoirs :",
            description: "Liste des devoirs à rendre avec dates d'échéance",
            image: "/student/homework-preview.png",
          },
        ],
      },
    },
  ],
};