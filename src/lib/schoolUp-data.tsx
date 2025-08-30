export const schoolUpData = {
  mainTabs: [
    {
      id: "admin",
      label: "Espace Admin",
      Icon: () => (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.90479 1.25H8.09521C8.95539 1.25004 9.61195 1.5055 10.0532 1.94678C10.4945 2.38805 10.75 3.04461 10.75 3.90479V8.09521C10.75 8.75977 10.5976 9.30188 10.3267 9.71533C10.057 10.1267 9.66038 10.4256 9.14355 10.5918L9.1377 10.5938C8.84 10.6975 8.489 10.75 8.09521 10.75H3.90479C3.511 10.75 3.16 10.6975 2.8623 10.5938L2.85645 10.5918C2.33962 10.4256 1.94296 10.1267 1.67334 9.71533C1.40241 9.30188 1.25003 8.75977 1.25 8.09521V3.90479C1.25004 3.04461 1.5055 2.38805 1.94678 1.94678C2.38805 1.5055 3.04461 1.25004 3.90479 1.25ZM3.90479 1.5C3.15785 1.50004 2.54616 1.69798 2.12207 2.12207C1.69798 2.54616 1.50004 3.15785 1.5 3.90479V8.1001C1.50001 8.66646 1.61254 9.15401 1.85498 9.54248C2.09999 9.93498 2.46557 10.2067 2.93311 10.3579L2.9707 10.3701H3.16797L3.23779 10.2339C3.6783 9.37085 4.72803 8.73486 6 8.73486C7.27205 8.73486 8.32669 9.37584 8.76221 10.2334L8.85938 10.4248L9.06348 10.3574C9.53442 10.2014 9.90133 9.92896 10.1465 9.53613C10.3891 9.14743 10.5 8.66112 10.5 8.09521V3.90479C10.5 3.15785 10.302 2.54616 9.87793 2.12207C9.45384 1.69798 8.84215 1.50004 8.09521 1.5H3.90479Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M6 4.25C6.85191 4.25002 7.54004 4.93812 7.54004 5.79004C7.54002 6.64285 6.85099 7.33494 6 7.33496C5.14899 7.33496 4.45998 6.64286 4.45996 5.79004C4.45996 4.93811 5.14807 4.25 6 4.25Z"
            fill="currentColor"
            stroke="currentColor"
          />
        </svg>
      ),
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
          images: ["/admin/admin-1.png"],
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
          images: ["/admin/admin-2.png"],
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
          image: ["/admin/admin-3.png"],
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
          images: ["/admin/admin-4.png"],
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
          images: ["/admin/admin-5.png"],
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
          images: ["/admin/admin-6.png"],
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
          images: ["/admin/admin-7.png"],
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
          images: ["/admin/admin-8.png"],
        },
      },
    },
    {
      id: "teacher",
      label: "Espace Enseignant",
      Icon: () => (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.545 3.49001C10.12 3.02001 9.41002 2.78501 8.38002 2.78501H8.26002V2.76501C8.26002 1.92501 8.26002 0.88501 6.38002 0.88501H5.62002C3.74002 0.88501 3.74002 1.93001 3.74002 2.76501V2.79001H3.62002C2.58502 2.79001 1.88002 3.02501 1.45502 3.49501C0.960019 4.04501 0.975019 4.78501 1.02502 5.29001L1.03002 5.32501L1.08002 5.85001C1.08502 5.85501 1.09502 5.86501 1.10502 5.87001C1.27002 5.98001 1.44002 6.09001 1.62002 6.19001C1.69002 6.23501 1.76502 6.27501 1.84002 6.31501C2.69502 6.78501 3.63502 7.10001 4.59002 7.25501C4.63502 7.72501 4.84002 8.27501 5.93502 8.27501C7.03002 8.27501 7.24502 7.73001 7.28002 7.24501C8.30002 7.08001 9.28502 6.72501 10.175 6.20501C10.205 6.19001 10.225 6.17501 10.25 6.16001C10.48 6.03001 10.695 5.89001 10.905 5.73501C10.915 5.73001 10.925 5.72001 10.93 5.71001L10.95 5.53001L10.975 5.29501C10.98 5.26501 10.98 5.24001 10.985 5.20501C11.025 4.70001 11.015 4.01001 10.545 3.49001ZM6.54502 6.91501C6.54502 7.44501 6.54502 7.52501 5.93002 7.52501C5.31502 7.52501 5.31502 7.43001 5.31502 6.92001V6.29001H6.54502V6.91501ZM4.45502 2.78501V2.76501C4.45502 1.91501 4.45502 1.60001 5.62002 1.60001H6.38002C7.54502 1.60001 7.54502 1.92001 7.54502 2.76501V2.79001H4.45502V2.78501Z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            d="M10.25 6.15001C10.225 6.16501 10.2 6.18001 10.175 6.19501C9.28496 6.71501 8.29996 7.06501 7.27996 7.23501C7.23996 7.71501 7.02996 8.26501 5.93496 8.26501C4.83996 8.26501 4.62996 7.72001 4.58996 7.24501C3.63496 7.09501 2.69496 6.78001 1.83996 6.30501C1.76496 6.26501 1.68996 6.22501 1.61996 6.18001C1.43996 6.08001 1.26996 5.97001 1.10496 5.86001C1.09496 5.85501 1.08496 5.84501 1.07996 5.84001L1.38496 9.09501C1.48996 10.09 1.89996 11.115 4.09996 11.115H7.90996C10.11 11.115 10.52 10.09 10.625 9.09001L10.94 5.70001C10.935 5.71001 10.925 5.72001 10.915 5.72501C10.7 5.88001 10.48 6.02501 10.25 6.15001Z"
            fill="currentColor"
          />
        </svg>
      ),
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
          images: ["/teacher/1.png"],
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
          images: ["/teacher/2.png"],
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
          images: ["/teacher/3.png"],
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
          images: ["/teacher/4.png", "/teacher/5.png"],
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
          images: ["/teacher/6.png", "/teacher/7.png", "/teacher/8.png"],
        },
      },
    },
    {
      id: "parent",
      label: "Espace Parent",
      Icon: () => (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M8.76502 3.885C8.73002 3.88 8.69502 3.88 8.66002 3.885C7.88502 3.86 7.27002 3.225 7.27002 2.445C7.27002 1.65 7.91502 1 8.71502 1C9.51002 1 10.16 1.645 10.16 2.445C10.155 3.225 9.54002 3.86 8.76502 3.885Z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            d="M10.3951 7.35001C9.83505 7.72501 9.05005 7.86501 8.32505 7.77001C8.51505 7.36001 8.61505 6.90502 8.62005 6.42502C8.62005 5.92502 8.51005 5.45002 8.30005 5.03502C9.04005 4.93502 9.82505 5.07501 10.39 5.45001C11.18 5.97001 11.1801 6.82501 10.3951 7.35001Z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            d="M3.21995 3.885C3.25495 3.88 3.28995 3.88 3.32495 3.885C4.09995 3.86 4.71495 3.225 4.71495 2.445C4.71495 1.65 4.06995 1 3.26995 1C2.47495 1 1.82495 1.645 1.82495 2.445C1.82995 3.225 2.44495 3.86 3.21995 3.885Z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            d="M3.27506 6.42499C3.27506 6.90999 3.38006 7.36999 3.57006 7.78499C2.86506 7.85999 2.13006 7.70999 1.59006 7.35499C0.800059 6.82999 0.800059 5.97499 1.59006 5.44999C2.12506 5.08999 2.88006 4.94499 3.59006 5.02499C3.38506 5.44499 3.27506 5.91999 3.27506 6.42499Z"
            fill="currentColor"
          />
          <path
            d="M6.06002 7.935C6.02002 7.93 5.97503 7.93 5.93003 7.935C5.01003 7.905 4.27502 7.15 4.27502 6.22C4.27502 5.27 5.04003 4.5 5.99503 4.5C6.94503 4.5 7.71502 5.27 7.71502 6.22C7.71502 7.15 6.98502 7.905 6.06002 7.935Z"
            fill="currentColor"
          />
          <path
            d="M4.43502 8.97001C3.68002 9.47501 3.68002 10.305 4.43502 10.805C5.29502 11.38 6.70503 11.38 7.56503 10.805C8.32003 10.3 8.32003 9.47001 7.56503 8.97001C6.71003 8.39501 5.30002 8.39501 4.43502 8.97001Z"
            fill="currentColor"
          />
        </svg>
      ),
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
          images: ["/parent/Frame.png", "/parent/Frame-1.png"],
        },
        fees: {
          features: [
            {
              title: "Suivi des frais et paiements",
              description:
                "Liste des frais facturés : frais d’inscription, frais de scolarité, frais de transport, frais de club, autres frais complémentaires Pour chaque facture : Description du frais. Occurrence (mensuelle, annuelle, etc.). Montant total facturé. Montant payé et montant impayé. Date d’échéance et date de paiement. Méthode de paiement (espèces, chèque, virement bancaire…). Statut du paiement (payée, partiellement payée, en attente de validation, non payée, validée).",
            },
            {
              title: " Abonnement / Paiements récurrents",
              description:
                "Possibilité de s’abonner à certains frais pour gérer les paiements mensuels automatiquement.",
            },
            {
              title: "Résumé des actions possibles",
              description:
                " Consulter toutes les factures et suivre le paiement de chaque frais. Vérifier les montants payés et impayés. Voir le détail des paiements (méthode et date).",
            },
          ],
          images: [
            "/parent/Frame-2.png",
            "/parent/Frame-3.png",
            "/parent/Frame-4.png",
          ],
        },
        schedule: {
          features: [
            {
              title: "Consultation des mesures disciplinaires :",
              description:
                "Liste des mesures disciplinaires de l’élève : Encouragements Observations Punitions (ex. : exclusion de cours) Pour chaque mesure : Date de l’événement. Commentaire ou note de l’enseignant. Nom de l’enseignant ayant pris la mesure.",
            },
            {
              title: "Filtrage et tri :",
              description:
                "Filtre par type de mesure (Encouragement, Observation, Punition). Recherche par mot-clé ou date. Tri possible pour mieux organiser l’affichage.",
            },
          ],
          images: ["/parent/Frame-5.png"],
        },
        Presence: {
          features: [
            {
              title: "Consultation des présences et absences :",
              description:
                "Liste des présences et absences de l’enfant avec :\n Matière et cours concerné. \n Statut :\n Absence justifiée \n Absence non justifiée \n Retard \n Expulsion \n Date et horaire du cours.",
            },
            {
              title: "Résumé général",
              description:
                "Total cours \n Absences justifiées \n Absences non justifiées \n Retards \n Expulsions",
            },
            {
              title: "Filtrage et tri",
              description:
                "Possibilité de filtrer par matière ou statut de présence.\n Recherche par mot-clé ou date.\n Tri pour organiser l’affichage des éléments facilement.",
            },
          ],
          images: ["/parent/Frame-6.png", "/parent/Frame-7.png"],
        },
        Examens: {
          features: [
            {
              title: " Consultation des examens",
              description:
                "Affichage du calendrier des examens de l’enfant.\n Détails de chaque examen :\n Matière et sous-matière\n Date et horaire\nType d’examen (DS, Contrôle…) \n Coefficient\n Note obtenue\n Statut (Passé, À venir, Évaluable)\nSystème d’évaluation utilisé (ex. : EduCheck → TalentGauge)",
            },
            {
              title: "Suivi des performances",
              description:
                "Visualiser la moyenne de l’enfant pour chaque matière ou examen.\n Comparer les examens passés et les notes publiées.",
            },
            {
              title: " Résumé des actions possibles",
              description:
                "Consulter le calendrier complet des examens.\n Vérifier les notes publiées et les examens passés.\n Suivre les examens à venir et leur éligibilité à l’évaluation.\n Filtrer, trier et rechercher des examens pour un suivi personnalisé.",
            },
          ],
          images: ["/parent/Frame-8.png"],
        },
        Resultat: {
          features: [
            {
              title: "Consultation des documents scolaires",
              description:
                "Accès aux différents types de documents :\n Bulletin de notes\n Relevé de notes\n Bulletin final\n Certificat\n Affichage par période scolaire ou trimestre.\n Indication du niveau de l’enfant et du système d’évaluation utilisé (ex. : EduCheck → TalentGauge).",
            },
            {
              title: " Export et partage",
              description:
                "Possibilité d’exporter les bulletins ou relevés au format PDF.\n Visualisation de la date de soumission des documents",
            },
            {
              title: "Résumé des actions possibles",
              description:
                "Consulter tous les documents de notes et résultats de l’enfant.\n Filtrer et rechercher facilement un bulletin ou relevé précis.\nTélécharger ou exporter les documents pour archivage ou impression.\nSuivre l’historique des bulletins soumis et validés.",
            },
          ],
          images: ["/parent/Frame-9.png", "/parent/Frame-10.png"],
        },
      },
    },
    {
      id: "student",
      label: "Espace Élève",
      Icon: () => (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M9.19 6.42001V8.88501C9.19 9.52001 8.695 10.2 8.1 10.4L6.505 10.93C6.225 11.025 5.77 11.025 5.495 10.93L3.9 10.4C3.3 10.2 2.81 9.52001 2.81 8.88501L2.815 6.42001L5.025 7.86001C5.565 8.21501 6.455 8.21501 6.995 7.86001L9.19 6.42001Z"
            fill="currentColor"
          />
          <path
            d="M9.99001 3.23L6.99501 1.265C6.45501 0.909999 5.56501 0.909999 5.02501 1.265L2.01501 3.23C1.05001 3.855 1.05001 5.27 2.01501 5.9L2.81501 6.42L5.02501 7.86C5.56501 8.215 6.45501 8.215 6.99501 7.86L9.19001 6.42L9.87501 5.97V7.5C9.87501 7.705 10.045 7.875 10.25 7.875C10.455 7.875 10.625 7.705 10.625 7.5V5.04C10.825 4.395 10.62 3.645 9.99001 3.23Z"
            fill="currentColor"
          />
        </svg>
      ),
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
          images: ["/student/Frame.png", "/student/Frame1.png"],
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
          images: [
            "/student/Frame2.png",
            "/student/Frame3.png",
            "/student/Frame4.png",
          ],
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
          images: ["/student/Frame5.png"],
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
          images: [
            "/student/Frame6.png",
            "/student/Frame7.png",
            "/student/Frame8.png",
          ],
        },
      },
    },
  ],
};
