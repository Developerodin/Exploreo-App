import {
    IonButton,
  IonCard,
  IonCardContent,
  IonDatetime,
  IonInput,
  IonText,
  IonTextarea,
} from "@ionic/react";
import React from "react";

const EventDetail = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div>
        <div>
          <IonTextarea
            placeholder="Enter Title"
            style={{
              height: "80px",
              backgroundColor: "#F1F1F1",
              borderRadius: "20px",
              padding: "10px",
            }}
          ></IonTextarea>
        </div>

        <div style={{ marginTop: "30px" }}>
          <IonTextarea
            placeholder="Description"
            style={{
              height: "216px",
              backgroundColor: "#F1F1F1",
              borderRadius: "20px",
              padding: "10px",
            }}
          ></IonTextarea>
        </div>
      </div>

      {/* Shedule */}

      <div style={{ marginTop: "30px", marginBottom: "20px" }}>
        <IonText
          style={{ fontSize: "20px", color: "#000000", fontWeight: "700" }}
        >
          SCHEDULE
        </IonText>
      </div>

      <div style={{ width: "95%", margin: "auto" }}>
        <div>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <IonText
              style={{
                fontSize: "12px",
                color: "#000000",
                fontWeight: "700",
                marginLeft: "20px",
              }}
            >
              STARTS
            </IonText>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IonInput
              style={{
                borderRadius: "20px",
                width: "103px",
                backgroundColor: "#F9F8F8",
                textAlign: "center",
                fontSize: "10px",
              }}
              placeholder="YYYY/MM/DD"
            ></IonInput>

            <IonInput
              style={{
                borderRadius: "20px",
                width: "103px",
                backgroundColor: "#F9F8F8",
                textAlign: "center",
                fontSize: "10px",
              }}
              placeholder="HOURS : MINUTES"
            ></IonInput>
          </div>
        </div>

        <div>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <IonText
              style={{
                fontSize: "12px",
                color: "#000000",
                fontWeight: "700",
                marginLeft: "20px",
              }}
            >
              ENDS
            </IonText>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IonInput
              style={{
                borderRadius: "20px",
                width: "103px",
                backgroundColor: "#F9F8F8",
                textAlign: "center",
                fontSize: "10px",
              }}
              placeholder="YYYY/MM/DD"
            ></IonInput>

            <IonInput
              style={{
                borderRadius: "20px",
                width: "103px",
                backgroundColor: "#F9F8F8",
                textAlign: "center",
                fontSize: "10px",
              }}
              placeholder="HOURS : MINUTES"
            ></IonInput>
          </div>
        </div>
      </div>

      {/* Addd Photos */}
      <div style={{ marginTop: "30px", marginBottom: "20px" }}>
        <IonText
          style={{ fontSize: "20px", color: "#000000", fontWeight: "700" }}
        >
          ADD PHOTOS
        </IonText>
      </div>

      <div style={{ width: "95%", margin: "auto" }}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IonCard style={{ width: "116px", height: "114px" }}>
              <IonCardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "53px",
                    height: "53px",
                    borderRadius: "50px",
                    marginTop: "15px",
                  }}
                >
                  <IonText
                    style={{
                      fontSize: "30px",
                      borderRadius: "50px",
                      backgroundColor: "#d1d1d1",
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    1
                  </IonText>
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard style={{ width: "116px", height: "114px" }}>
              <IonCardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "53px",
                    height: "53px",
                    borderRadius: "50px",
                    marginTop: "15px",
                  }}
                >
                  <IonText
                    style={{
                      fontSize: "30px",
                      borderRadius: "50px",
                      backgroundColor: "#d1d1d1",
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    2
                  </IonText>
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </div>

 {/* Add Location */}

     <div style={{ marginTop: "30px", marginBottom: "20px" }}>
        <IonText
          style={{ fontSize: "20px", color: "#000000", fontWeight: "700" }}
        >
          ADD LOCATION
        </IonText>
      </div>

     <div style={{height:"200px"}}>

     </div>


{/* Create Butoon */}

<div style={{width:"60%",margin:"auto"}}>
<IonButton style={{width:"100%"}} shape="round" color="dark">CREATE</IonButton>
</div>




    </div>
  );
};

export default EventDetail;
