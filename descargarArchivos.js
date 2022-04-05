descargarPDF = (enlacePDF) => {
  fetch(enlacePDF)
    .then((resp) => resp.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "Cuestionario.pdf"; /* Nombre de la descarga */
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      this.$dialogs.alert('Se ha descargado con éxito')
    })
    .catch(() => this.$dialogs.alert('Error al descargar el cuestionario'));
}