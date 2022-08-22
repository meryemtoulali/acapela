import * as Yup from "yup";

export const initialValues = {
    id: "",
    isFerme : "",
    detailsCircuit: {
        modeTransport: "",
        typeCircuit: "",
        image : null
      },
    descriptionCircuit: {
          fr:{
            nomCircuit: "",
            description: ""
            },
          en:{
            nomCircuit: "",
            description: ""
            },
          es:{
            nomCircuit: "",
            description: ""
            }
        },
    dateCircuit: {
          isRecurrence: "false",
          periodes : [{ dateDebut: "", dateFin: "" }],
          recurrenceOptions: {
              dates: [{ dateDebut: "", dateFin: "" }],
              frequenceType: "Hebdomadaire",
              frequenceHebdo: {
                  nbrSemaines: "",
                  jours: []
              },
              frequenceMensu: {
                  nbrMois: "",
                  jour: ""
              },
              frequenceAnnu: {
                  nbrAns: "",
                  jour: "",
                  mois: ""
              }
          }
        },
    poiCircuit: [
      {nomPoi: "", coord: ""}
      ]
      
  };



export const validationSchema = Yup.object({
    poiDetails: Yup.object({
        coord: Yup.string().required("Obligatoire"),
        nomVille: Yup.string().required("Obligatoire"),
        score: Yup.string().required("Obligatoire"),
        type: Yup.string().required("Obligatoire"),
        services: Yup.string().required("Obligatoire"),
    }),

    poiDescription: Yup.object({
        fr: Yup.object({
            nomPoi: Yup.string().required("Obligatoire"),
            description: Yup.string().required("Obligatoire"),
            descriptionAudio: Yup.string().required("Obligatoire"),
            voix: Yup.string().required("Obligatoire"),
            dictionnaire: Yup.string().required("Obligatoire"),
        })
    }),
    fichiers: Yup.object({
        imageParDefaut: Yup.mixed()
            .nullable()
            .test("type", "Formats autorisés: jpeg, png, bmp", (value) => {
                return (
                    !value ||
                    value.type === "image/jpeg" ||
                    value.type === "image/png" ||
                    value.type === "image/bmp"
                );
            }),
        videoParDefaut: Yup.mixed()
            .nullable()
            .test("type", "Formats autorisés: mp4, avi", (value) => {
                return (
                    !value ||
                    value.type === "video/mp4" ||
                    value.type === "video/avi"
                );
            }),
    }),
});



