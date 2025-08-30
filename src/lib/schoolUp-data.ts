import { useTranslation } from 'react-i18next';

export const useSchoolUpData = () => {
  const { t } = useTranslation('data');
  
  return {
    mainTabs: [
      {
        id: "admin",
        label: t('mainTabs.admin.label'),
        icon: "/user-square.svg",
        primaryBgClass: "bg-[#3879F0]",
        secondaryBgClass: "bg-[#DEEAFF]",
        primaryTextClass: "text-[#3879F0]",
        lightTextClass: "text-[#DEEAFF]",
        whiteTextClass: "text-[#FFF]",
        subTabs: [
          { id: "dashboard", label: t('mainTabs.admin.subTabs.dashboard') },
          { id: "schedule", label: t('mainTabs.admin.subTabs.schedule') },
          { id: "fees", label: t('mainTabs.admin.subTabs.fees') },
          { id: "invoice", label: t('mainTabs.admin.subTabs.invoice') },
          { id: "evaluation", label: t('mainTabs.admin.subTabs.evaluation') },
          { id: "grades", label: t('mainTabs.admin.subTabs.grades') },
          { id: "forms", label: t('mainTabs.admin.subTabs.forms') },
          { id: "reports", label: t('mainTabs.admin.subTabs.reports') },
        ],
        featuresBySubTab: {
          dashboard: {
            features: [
              {
                title: t('mainTabs.admin.features.dashboard.globalOverview.title'),
                description: t('mainTabs.admin.features.dashboard.globalOverview.description'),
              },
              {
                title: t('mainTabs.admin.features.dashboard.financialManagement.title'),
                description: t('mainTabs.admin.features.dashboard.financialManagement.description'),
              },
              {
                title: t('mainTabs.admin.features.dashboard.eventsAgenda.title'),
                description: t('mainTabs.admin.features.dashboard.eventsAgenda.description'),
              },
              {
                title: t('mainTabs.admin.features.dashboard.realTimeAttendance.title'),
                description: t('mainTabs.admin.features.dashboard.realTimeAttendance.description'),
              },
              {
                title: t('mainTabs.admin.features.dashboard.adminTasks.title'),
                description: t('mainTabs.admin.features.dashboard.adminTasks.description'),
              },
              {
                title: t('mainTabs.admin.features.dashboard.notesReminders.title'),
                description: t('mainTabs.admin.features.dashboard.notesReminders.description'),
              },
              {
                title: t('mainTabs.admin.features.dashboard.multilingual.title'),
                description: t('mainTabs.admin.features.dashboard.multilingual.description'),
              },
            ],
            images: ["/admin/admin-1.png"],
          },
          schedule: {
            features: [
              {
                title: t('mainTabs.admin.features.schedule.scheduleCreation.title'),
                description: t('mainTabs.admin.features.schedule.scheduleCreation.description'),
              },
              {
                title: t('mainTabs.admin.features.schedule.centralizedPlanning.title'),
                description: t('mainTabs.admin.features.schedule.centralizedPlanning.description'),
              },
              {
                title: t('mainTabs.admin.features.schedule.realTimeTracking.title'),
                description: t('mainTabs.admin.features.schedule.realTimeTracking.description'),
              },
              {
                title: t('mainTabs.admin.features.schedule.realTimeAttendance.title'),
                description: t('mainTabs.admin.features.schedule.realTimeAttendance.description'),
              },
              {
                title: t('mainTabs.admin.features.schedule.modularOrganization.title'),
                description: t('mainTabs.admin.features.schedule.modularOrganization.description'),
              },
              {
                title: t('mainTabs.admin.features.schedule.directConnection.title'),
                description: t('mainTabs.admin.features.schedule.directConnection.description'),
              },
            ],
            images: ["/admin/admin-2.png"],
          },
          fees: {
            features: [
              {
                title: t('mainTabs.admin.features.fees.submenuNavigation.title'),
                description: t('mainTabs.admin.features.fees.submenuNavigation.description'),
              },
              {
                title: t('mainTabs.admin.features.fees.globalStatistics.title'),
                description: t('mainTabs.admin.features.fees.globalStatistics.description'),
              },
              {
                title: t('mainTabs.admin.features.fees.fees.title'),
                description: t('mainTabs.admin.features.fees.fees.description'),
              },
            ],
            images: ["/admin/admin-3.png"],
          },
          invoice: {
            features: [
              {
                title: t('mainTabs.admin.features.invoice.submenuNavigation.title'),
                description: t('mainTabs.admin.features.invoice.submenuNavigation.description'),
              },
              {
                title: t('mainTabs.admin.features.invoice.globalStatistics.title'),
                description: t('mainTabs.admin.features.invoice.globalStatistics.description'),
              },
              {
                title: t('mainTabs.admin.features.invoice.invoices.title'),
                description: t('mainTabs.admin.features.invoice.invoices.description'),
              },
            ],
            images: ["/admin/admin-4.png"],
          },
          evaluation: {
            features: [
              {
                title: t('mainTabs.admin.features.evaluation.globalStatistics.title'),
                description: t('mainTabs.admin.features.evaluation.globalStatistics.description'),
              },
              {
                title: t('mainTabs.admin.features.evaluation.documentManagement.title'),
                description: t('mainTabs.admin.features.evaluation.documentManagement.description'),
              },
              {
                title: t('mainTabs.admin.features.evaluation.classDetails.title'),
                description: t('mainTabs.admin.features.evaluation.classDetails.description'),
              },
            ],
            images: ["/admin/admin-5.png"],
          },
          grades: {
            features: [
              {
                title: t('mainTabs.admin.features.grades.inputTable.title'),
                description: t('mainTabs.admin.features.grades.inputTable.description'),
              },
              {
                title: t('mainTabs.admin.features.grades.rightStatistics.title'),
                description: t('mainTabs.admin.features.grades.rightStatistics.description'),
              },
              {
                title: t('mainTabs.admin.features.grades.examAddition.title'),
                description: t('mainTabs.admin.features.grades.examAddition.description'),
              },
            ],
            images: ["/admin/admin-6.png"],
          },
          forms: {
            features: [
              {
                title: t('mainTabs.admin.features.forms.customForms.title'),
                description: t('mainTabs.admin.features.forms.customForms.description'),
              },
              {
                title: t('mainTabs.admin.features.forms.readyTemplates.title'),
                description: t('mainTabs.admin.features.forms.readyTemplates.description'),
              },
              {
                title: t('mainTabs.admin.features.forms.configurableFields.title'),
                description: t('mainTabs.admin.features.forms.configurableFields.description'),
              },
              {
                title: t('mainTabs.admin.features.forms.mediaDocuments.title'),
                description: t('mainTabs.admin.features.forms.mediaDocuments.description'),
              },
              {
                title: t('mainTabs.admin.features.forms.realTimeAnalysis.title'),
                description: t('mainTabs.admin.features.forms.realTimeAnalysis.description'),
              },
              {
                title: t('mainTabs.admin.features.forms.accessibility.title'),
                description: t('mainTabs.admin.features.forms.accessibility.description'),
              },
            ],
            images: ["/admin/admin-7.png"],
          },
          reports: {
            features: [
              {
                title: t('mainTabs.admin.features.reports.customForms.title'),
                description: t('mainTabs.admin.features.reports.customForms.description'),
              },
              {
                title: t('mainTabs.admin.features.reports.readyTemplates.title'),
                description: t('mainTabs.admin.features.reports.readyTemplates.description'),
              },
              {
                title: t('mainTabs.admin.features.reports.configurableFields.title'),
                description: t('mainTabs.admin.features.reports.configurableFields.description'),
              },
              {
                title: t('mainTabs.admin.features.reports.mediaDocuments.title'),
                description: t('mainTabs.admin.features.reports.mediaDocuments.description'),
              },
              {
                title: t('mainTabs.admin.features.reports.realTimeAnalysis.title'),
                description: t('mainTabs.admin.features.reports.realTimeAnalysis.description'),
              },
              {
                title: t('mainTabs.admin.features.reports.accessibility.title'),
                description: t('mainTabs.admin.features.reports.accessibility.description'),
              },
            ],
            images: ["/admin/admin-8.png"],
          },
        },
      },
      {
        id: "teacher",
        label: t('mainTabs.teacher.label'),
        icon: "/briefcase.svg",
        primaryBgClass: "bg-[#A068AE]",
        secondaryBgClass: "bg-[#F4EEFF]",
        primaryTextClass: "text-[#A068AE]",
        lightTextClass: "text-[#F4EEFF]",
        whiteTextClass: "text-[#FFF]",
        subTabs: [
          { id: "dashboard", label: t('mainTabs.teacher.subTabs.dashboard') },
          { id: "schedule", label: t('mainTabs.teacher.subTabs.schedule') },
          { id: "grades", label: t('mainTabs.teacher.subTabs.grades') },
          { id: "evaluation", label: t('mainTabs.teacher.subTabs.evaluation') },
          { id: "reports", label: t('mainTabs.teacher.subTabs.reports') },
        ],
        featuresBySubTab: {
          dashboard: {
            features: [
              {
                title: t('mainTabs.teacher.features.dashboard.scheduleClasses.title'),
                description: t('mainTabs.teacher.features.dashboard.scheduleClasses.description'),
              },
              {
                title: t('mainTabs.teacher.features.dashboard.homeworkManagement.title'),
                description: t('mainTabs.teacher.features.dashboard.homeworkManagement.description'),
              },
              {
                title: t('mainTabs.teacher.features.dashboard.studentTracking.title'),
                description: t('mainTabs.teacher.features.dashboard.studentTracking.description'),
              },
              {
                title: t('mainTabs.teacher.features.dashboard.attendanceCalls.title'),
                description: t('mainTabs.teacher.features.dashboard.attendanceCalls.description'),
              },
              {
                title: t('mainTabs.teacher.features.dashboard.attendanceHistory.title'),
                description: t('mainTabs.teacher.features.dashboard.attendanceHistory.description'),
              },
              {
                title: t('mainTabs.teacher.features.dashboard.agendaEvents.title'),
                description: t('mainTabs.teacher.features.dashboard.agendaEvents.description'),
              },
            ],
            images: ["/teacher/teacher-1.png"],
          },
          schedule: {
            features: [
              {
                title: t('mainTabs.teacher.features.schedule.smartFilters.title'),
                description: t('mainTabs.teacher.features.schedule.smartFilters.description'),
              },
              {
                title: t('mainTabs.teacher.features.schedule.homeworkDetails.title'),
                description: t('mainTabs.teacher.features.schedule.homeworkDetails.description'),
              },
              {
                title: t('mainTabs.teacher.features.schedule.studentClassTracking.title'),
                description: t('mainTabs.teacher.features.schedule.studentClassTracking.description'),
              },
              {
                title: t('mainTabs.teacher.features.schedule.multiSubjects.title'),
                description: t('mainTabs.teacher.features.schedule.multiSubjects.description'),
              },
              {
                title: t('mainTabs.teacher.features.schedule.progressIndicators.title'),
                description: t('mainTabs.teacher.features.schedule.progressIndicators.description'),
              },
              {
                title: t('mainTabs.teacher.features.schedule.homeworkCreation.title'),
                description: t('mainTabs.teacher.features.schedule.homeworkCreation.description'),
              },
              {
                title: t('mainTabs.teacher.features.schedule.targetedAssignment.title'),
                description: t('mainTabs.teacher.features.schedule.targetedAssignment.description'),
              },
              {
                title: t('mainTabs.teacher.features.schedule.resourceAddition.title'),
                description: t('mainTabs.teacher.features.schedule.resourceAddition.description'),
              },
            ],
            images: ["/teacher/teacher-2.png"],
          },
          grades: {
            features: [
              {
                title: t('mainTabs.teacher.features.grades.encouragements.title'),
                description: t('mainTabs.teacher.features.grades.encouragements.description'),
              },
              {
                title: t('mainTabs.teacher.features.grades.observations.title'),
                description: t('mainTabs.teacher.features.grades.observations.description'),
              },
              {
                title: t('mainTabs.teacher.features.grades.punishments.title'),
                description: t('mainTabs.teacher.features.grades.punishments.description'),
              },
              {
                title: t('mainTabs.teacher.features.grades.quickStatistics.title'),
                description: t('mainTabs.teacher.features.grades.quickStatistics.description'),
              },
              {
                title: t('mainTabs.teacher.features.grades.completeHistory.title'),
                description: t('mainTabs.teacher.features.grades.completeHistory.description'),
              },
              {
                title: t('mainTabs.teacher.features.grades.sortFilters.title'),
                description: t('mainTabs.teacher.features.grades.sortFilters.description'),
              },
            ],
            images: ["/teacher/teacher-3.png"],
          },
          evaluation: {
            features: [
              {
                title: t('mainTabs.teacher.features.evaluation.examManagement.title'),
                description: t('mainTabs.teacher.features.evaluation.examManagement.description'),
              },
              {
                title: t('mainTabs.teacher.features.evaluation.gradeManagement.title'),
                description: t('mainTabs.teacher.features.evaluation.gradeManagement.description'),
              },
              {
                title: t('mainTabs.teacher.features.evaluation.planningConfiguration.title'),
                description: t('mainTabs.teacher.features.evaluation.planningConfiguration.description'),
              },
            ],
            images: ["/teacher/teacher-4.png"],
          },
          reports: {
            features: [
              {
                title: t('mainTabs.teacher.features.reports.appreciationInput.title'),
                description: t('mainTabs.teacher.features.reports.appreciationInput.description'),
              },
              {
                title: t('mainTabs.teacher.features.reports.progressTracking.title'),
                description: t('mainTabs.teacher.features.reports.progressTracking.description'),
              },
              {
                title: t('mainTabs.teacher.features.reports.appreciationPublication.title'),
                description: t('mainTabs.teacher.features.reports.appreciationPublication.description'),
              },
            ],
            images: ["/teacher/teacher-5.png"],
          },
        },
      },
      {
        id: "parent",
        label: t('mainTabs.parent.label'),
        icon: "/people-1.svg",
        primaryBgClass: "bg-[#FF9F51]",
        secondaryBgClass: "bg-[#FFF4ED]",
        primaryTextClass: "text-[#FF9F51]",
        lightTextClass: "text-[#FFF4ED]",
        whiteTextClass: "text-[#FFF]",
        subTabs: [
          { id: "dashboard", label: t('mainTabs.parent.subTabs.dashboard') },
          { id: "fees", label: t('mainTabs.parent.subTabs.fees') },
          { id: "schedule", label: t('mainTabs.parent.subTabs.schedule') },
          { id: "Presence", label: t('mainTabs.parent.subTabs.Presence') },
          { id: "Examens", label: t('mainTabs.parent.subTabs.Examens') },
          { id: "Resultat", label: t('mainTabs.parent.subTabs.Resultat') },
        ],
        featuresBySubTab: {
          dashboard: {
            features: [
              {
                title: t('mainTabs.parent.features.dashboard.generalOverview.title'),
                description: t('mainTabs.parent.features.dashboard.generalOverview.description'),
              },
              {
                title: t('mainTabs.parent.features.dashboard.schedule.title'),
                description: t('mainTabs.parent.features.dashboard.schedule.description'),
              },
              {
                title: t('mainTabs.parent.features.dashboard.attendanceTracking.title'),
                description: t('mainTabs.parent.features.dashboard.attendanceTracking.description'),
              },
              {
                title: t('mainTabs.parent.features.dashboard.academicPerformance.title'),
                description: t('mainTabs.parent.features.dashboard.academicPerformance.description'),
              },
              {
                title: t('mainTabs.parent.features.dashboard.multiChildManagement.title'),
                description: t('mainTabs.parent.features.dashboard.multiChildManagement.description'),
              },
            ],
            images: ["/parent/parent-1.png"],
          },
          fees: {
            features: [
              {
                title: t('mainTabs.parent.features.fees.feesPaymentTracking.title'),
                description: t('mainTabs.parent.features.fees.feesPaymentTracking.description'),
              },
              {
                title: t('mainTabs.parent.features.fees.subscriptionRecurring.title'),
                description: t('mainTabs.parent.features.fees.subscriptionRecurring.description'),
              },
              {
                title: t('mainTabs.parent.features.fees.actionsSummary.title'),
                description: t('mainTabs.parent.features.fees.actionsSummary.description'),
              },
            ],
            images: ["/parent/parent-2.png"],
          },
          schedule: {
            features: [
              {
                title: t('mainTabs.parent.features.schedule.disciplinaryConsultation.title'),
                description: t('mainTabs.parent.features.schedule.disciplinaryConsultation.description'),
              },
              {
                title: t('mainTabs.parent.features.schedule.filteringSort.title'),
                description: t('mainTabs.parent.features.schedule.filteringSort.description'),
              },
            ],
            images: ["/parent/parent-3.png"],
          },
          Presence: {
            features: [
              {
                title: t('mainTabs.parent.features.Presence.attendanceConsultation.title'),
                description: t('mainTabs.parent.features.Presence.attendanceConsultation.description'),
              },
              {
                title: t('mainTabs.parent.features.Presence.generalSummary.title'),
                description: t('mainTabs.parent.features.Presence.generalSummary.description'),
              },
              {
                title: t('mainTabs.parent.features.Presence.filteringSort.title'),
                description: t('mainTabs.parent.features.Presence.filteringSort.description'),
              },
            ],
            images: ["/parent/parent-4.png"],
          },
          Examens: {
            features: [
              {
                title: t('mainTabs.parent.features.Examens.examConsultation.title'),
                description: t('mainTabs.parent.features.Examens.examConsultation.description'),
              },
              {
                title: t('mainTabs.parent.features.Examens.performanceTracking.title'),
                description: t('mainTabs.parent.features.Examens.performanceTracking.description'),
              },
              {
                title: t('mainTabs.parent.features.Examens.actionsSummary.title'),
                description: t('mainTabs.parent.features.Examens.actionsSummary.description'),
              },
            ],
            images: ["/parent/parent-5.png"],
          },
          Resultat: {
            features: [
              {
                title: t('mainTabs.parent.features.Resultat.documentConsultation.title'),
                description: t('mainTabs.parent.features.Resultat.documentConsultation.description'),
              },
              {
                title: t('mainTabs.parent.features.Resultat.exportShare.title'),
                description: t('mainTabs.parent.features.Resultat.exportShare.description'),
              },
              {
                title: t('mainTabs.parent.features.Resultat.actionsSummary.title'),
                description: t('mainTabs.parent.features.Resultat.actionsSummary.description'),
              },
            ],
            images: ["/parent/parent-6.png"],
          },
        },
      },
      {
        id: "student",
        label: t('mainTabs.student.label'),
        icon: "/teacher-1.svg",
        primaryBgClass: "bg-[#F37F73]",
        secondaryBgClass: "bg-[#FFF0EF]",
        primaryTextClass: "text-[#F37F73]",
        lightTextClass: "text-[#FFF0EF]",
        whiteTextClass: "text-[#FFF]",
        subTabs: [
          { id: "dashboard", label: t('mainTabs.student.subTabs.dashboard') },
          { id: "messagerie", label: t('mainTabs.student.subTabs.messagerie') },
          { id: "grades", label: t('mainTabs.student.subTabs.grades') },
          { id: "homework", label: t('mainTabs.student.subTabs.homework') },
        ],
        featuresBySubTab: {
          dashboard: {
            features: [
              {
                title: t('mainTabs.student.features.dashboard.quickInfo.title'),
                description: t('mainTabs.student.features.dashboard.quickInfo.description'),
              },
              {
                title: t('mainTabs.student.features.dashboard.mainActions.title'),
                description: t('mainTabs.student.features.dashboard.mainActions.description'),
              },
            ],
            images: ["/student/student-1.png"],
          },
          messagerie: {
            features: [
              {
                title: t('mainTabs.student.features.messagerie.messaging.title'),
                description: t('mainTabs.student.features.messagerie.messaging.description'),
              },
              {
                title: t('mainTabs.student.features.messagerie.multimediaOptions.title'),
                description: t('mainTabs.student.features.messagerie.multimediaOptions.description'),
              },
              {
                title: t('mainTabs.student.features.messagerie.notificationsOrganization.title'),
                description: t('mainTabs.student.features.messagerie.notificationsOrganization.description'),
              },
            ],
            images: ["/student/student-2.png"],
          },
          grades: {
            features: [
              {
                title: t('mainTabs.student.features.grades.calendarPlanning.title'),
                description: t('mainTabs.student.features.grades.calendarPlanning.description'),
              },
              {
                title: t('mainTabs.student.features.grades.sessionDetails.title'),
                description: t('mainTabs.student.features.grades.sessionDetails.description'),
              },
              {
                title: t('mainTabs.student.features.grades.navigationInteraction.title'),
                description: t('mainTabs.student.features.grades.navigationInteraction.description'),
              },
            ],
            images: ["/student/student-3.png"],
          },
          homework: {
            features: [
              {
                title: t('mainTabs.student.features.homework.homeworkOrganization.title'),
                description: t('mainTabs.student.features.homework.homeworkOrganization.description'),
              },
              {
                title: t('mainTabs.student.features.homework.homeworkDetails.title'),
                description: t('mainTabs.student.features.homework.homeworkDetails.description'),
              },
              {
                title: t('mainTabs.student.features.homework.navigation.title'),
                description: t('mainTabs.student.features.homework.navigation.description'),
              },
            ],
            images: ["/student/student-4.png"],
          },
        },
      },
    ],
  };
};
