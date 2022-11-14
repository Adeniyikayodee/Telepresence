exports.changeColor = async (req, res) => {
  console.log("Returning a blue color to web");
  return res.json({
    data: "#F08080",
    message: "Returning a blue color web",
  });
};
