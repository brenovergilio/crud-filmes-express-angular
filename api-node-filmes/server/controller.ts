import model from "./model";

class Controller {
  constructor() {}

  //select
  getFilms() {
    return model.find({});
  }

  select(req, res) {
    this.getFilms()
      .then((films) => res.status(200).json( films ))
      .catch((err) => res.status(400).json( err ));
  }

  //selectOne
  getFilmsByID(id) {
    return model.find(id);
  }

  selectOne(req, res) {
    const id = { _id: req.params.id };

    this.getFilmsByID(id)
      .then((films) => res.status(200).json( films[0] ))
      .catch((err) => res.status(400).json( err ));
  }

  //delete
  deleteFilmByID(id) {
    return model.deleteOne(id);
  }

  delete(req, res) {
    const id = { _id: req.params.id };

    this.deleteFilmByID(id)
      .then((film) => res.status(200).json( film[0] ))
      .catch((err) => res.status(400).json( err ));
  }

  //update
  updateFilmByID(id, data) {
    return model.findOneAndUpdate(id, data);
  }

  update(req, res) {
    const id = { _id: req.params.id };
    const car = req.body;

    this.updateFilmByID(id, car)
      .then((film) => res.status(200).json( film[0] ))
      .catch((err) => res.status(400).json( err ));
  }

  //insert
  createFilm(data) {
    return model.create(data);
  }

  insert(req, res) {
    const film = req.body;

    this.createFilm(film)
      .then((film) => res.status(200).json( film[0] ))
      .catch((err) => res.status(400).json( err ));
  }
}

export default Controller;
