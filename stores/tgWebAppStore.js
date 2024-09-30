import { useWebApp, useWebAppRequests } from "vue-tg";

export const useTgWebAppStore = defineStore("tgWebAppStore", {
  state: () => ({
    webAppData: null,
    dataUnsafe: null,
  }),

  actions: {
    init() {
      return new Promise(async (resolve, reject) => {
        this.webAppData = useWebApp();

        if (this.webAppData.version > "6.0") {
          this.dataUnsafe = await this.initDataUnsafe();
          //await this.deleteDataUnsafe();
        }
        resolve(true);
      });
    },

    initDataUnsafe() {
      return new Promise(async (resolve, reject) => {
        let dataUnsafe = null;

        await useWebAppCloudStorage()
          .getStorageItem("initDataUnsafe")
          .then((data) => {
            if (typeof data === "string" && data === "") {
              dataUnsafe = useWebApp().initDataUnsafe;

              useWebAppCloudStorage().setStorageItem(
                "initDataUnsafe",
                JSON.stringify(dataUnsafe),
              );
            } else {
              dataUnsafe = JSON.parse(data);
            }
            resolve(dataUnsafe);
          });
      });
    },

    deleteDataUnsafe() {
      return new Promise(async (resolve, reject) => {
        await useWebAppCloudStorage().removeStorageItems(["initDataUnsafe"]);
        resolve(true);
      });
    },

    checkPermissionSendMessage() {
      useWebAppCloudStorage()
        .getStorageItem("checkPermissionSendMessage")
        .then((data) => {
          if (typeof data === "string" && data === "") {
            useWebAppRequests().requestWriteAccess((success) => {
              if (success) {
                console.log("web app request SUCCESS");
              } else {
                console.log("web app request FAIL");
              }
            });
          }
        });
    },
  },
});
