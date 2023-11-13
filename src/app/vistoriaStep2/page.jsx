"use client"
import Link from "next/link";
import React, { useState, useRef } from "react";
import stepsLogin from "../../components/StepsLogin/StepsLogin";
import CustomButton from "@/components/CustomButton/Button";
import headerSectionStyles from "../../styles/HeaderSectionStyle.module.css";
import axios from "axios";

const VistoriaStep2 = () => {
  const currentStep = stepsLogin[1];
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  //const [predictionImage, setPredictionImage] = useState(null);
  const [isPhotoValidated, setIsPhotoValidated] = useState(false);
  const [isPhotoInvalid, setIsPhotoInvalid] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    const imgData = canvas.toDataURL("image/png");
    setCapturedImage(imgData);
    sendImageToRoboflow(imgData);
    video.srcObject.getVideoTracks().forEach((track) => track.stop());
  };

  const sendImageToRoboflow = async (imageData) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://detect.roboflow.com/identificacao-de-bikes/1",
        params: {
          api_key: "tAOZU1nzuwxLPdZHLTfy",
        },
        data: imageData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log("Response from Roboflow:", response.data);
      // Aqui você pode processar a resposta da API do Roboflow, talvez mostrando o resultado na interface do usuário.
       if (response.data && response.data.predictions) {
         if (response.data.predictions.length > 0) {
           // Se houver previsões, marca a foto como validada
           setIsPhotoValidated(true);
           setIsPhotoInvalid(false); // Reinicia o estado para foto inválida
         } else {
           // Se não houver previsões, marca a foto como inválida
           setIsPhotoInvalid(true);
           setIsPhotoValidated(false); // Reinicia o estado para foto validada
         }
       }
    } catch (error) {
      console.error("Error sending image to Roboflow:", error);
    }
  };

  return (
    <div>
      <section className={headerSectionStyles.headerSection}>
        <div className={headerSectionStyles.surveyBox}>
          <h1>2 - {currentStep.title}</h1>
          <p>{currentStep.description}</p>

          <div>
            <CustomButton onClick={startCamera}>Abrir Câmera</CustomButton>
          </div>

          <Link href="/vistoriaStep3">
            <CustomButton>Próxima Etapa</CustomButton>
          </Link>
        </div>
        <div className={headerSectionStyles.surveyChat}>
          <video
            ref={videoRef}
            autoPlay
            muted
            style={{ width: "100%", maxWidth: "300px" }}
          />
          <CustomButton onClick={takePhoto}>Tirar Foto</CustomButton>
          {capturedImage && (
            <div>
              <img src={capturedImage} alt="Captured" />
            </div>
          )}
          {isPhotoValidated && <p>Sua foto foi validada!</p>}
          {isPhotoInvalid && <p>Sua foto é inválida!</p>}
        </div>
      </section>
    </div>
  );
};

export default VistoriaStep2;
