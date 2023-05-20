const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('casa_mascota_db.sqlite');

// Obtener todas las vacunas
exports.getVacunas = (callback) => {
  db.all('SELECT * FROM Vacuna', [], (err, rows) => {
    if (err) {
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Obtener una vacuna por ID
exports.getVacunaById = (id, callback) => {
  db.get('SELECT * FROM Vacuna WHERE id_vacuna = ?', [id], (err, row) => {
    if (err) {
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Obtener todas las vacunas de un doctor por ID de doctor
exports.getVacunasByDoctorId = (doctorId, callback) => {
    db.all('SELECT * FROM Vacuna WHERE Doctor_id_doctor = ?', [doctorId], (err, rows) => {
        if (err) {
            callback(err);
        } else {
            callback(null, rows);
        }
    });
};

// Obtener todas las vacunas de una cita agendada por ID de cita agendada
exports.getVacunasByCitaAgendadaId = (citaAgendadaId, callback) => {
    db.all('SELECT * FROM Vacuna WHERE Cita_Agendada_id_cita = ?', [citaAgendadaId], (err, rows) => {
        if (err) {
            callback(err);
        } else {
            callback(null, rows);
        }
    });
};

// Crear una nueva vacuna
exports.createVacuna = (vacuna, callback) => {
  const { id_vacuna, nombre, fecha, Doctor_id_doctor, Cita_Agendada_id_cita } = vacuna;
  db.run(
    'INSERT INTO Vacuna (id_vacuna, nombre, fecha, Doctor_id_doctor, Cita_Agendada_id_cita) VALUES (?, ?, ?, ?, ?)',
    [id_vacuna, nombre, fecha, Doctor_id_doctor, Cita_Agendada_id_cita],
    (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

// Actualizar una vacuna existente
exports.updateVacuna = (id, vacuna, callback) => {
  const { nombre, fecha, Doctor_id_doctor, Cita_Agendada_id_cita } = vacuna;
  db.run(
    'UPDATE Vacuna SET nombre = ?, fecha = ?, Doctor_id_doctor = ?, Cita_Agendada_id_cita = ? WHERE id_vacuna = ?',
    [nombre, fecha, Doctor_id_doctor, Cita_Agendada_id_cita, id],
    (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

// Eliminar una vacuna por ID
exports.deleteVacunaById = (id, callback) => {
  db.run('DELETE FROM Vacuna WHERE id_vacuna = ?', [id], (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};
