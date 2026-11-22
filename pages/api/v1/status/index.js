function status(request, response) {
  response.status(200).json({ status: "tudo cetinho" });
}
export default status;