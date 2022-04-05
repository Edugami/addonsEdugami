//Author @shoun97

descargarPDF = (enlacePDF) => { // La función recibe como parámetro cualquier uri de un archivo en especifico o de cualquier pagina html en ese caso descarga el html
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
      this.$dialogs.alert('Se ha descargado con éxito') //vuetify se puede cambiar por otra función de éxito
    })
    .catch(() => this.$dialogs.alert('Error al descargar el cuestionario')); //vuetify se puede cambiar por tro alert
}
