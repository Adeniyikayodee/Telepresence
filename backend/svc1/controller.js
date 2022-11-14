exports.changeColor = async (req, res) => {
  console.log("Calling change color function");
  return res.json({
    data: "#FF0000",
    message: "Calling change color function",
  });
};
