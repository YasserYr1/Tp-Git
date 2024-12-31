// Javascript gestion des compétences

const competenceName = document.getElementById('nomCompetence');
const choix = document.getElementById('choix');
const description = document.getElementById('description');
const ajouter = document.getElementById('ajouter');
const erreurNom = document.getElementById('error-nom');
const erreurNiveau = document.getElementById('error-niveau');
const affichage = document.getElementById('affichage');

const formValidation = () => {
    let isValid = true;

    erreurNom.style.display = "none";
    erreurNiveau.style.display = "none";

    if (competenceName.value.length < 3) {
        erreurNom.innerText = "Le nom de compétence doit être 3 lettres ou plus";
        erreurNom.style.display = "inline";
        isValid = false;
    }

    if (choix.value === "") {
        erreurNiveau.innerText = "Vous devez selectionner un niveau";
        erreurNiveau.style.display = "inline";
        isValid = false;
    }

    return isValid
}

const afficherCompetences = () => {
    affichage.innerHTML = ""; // réinitialiser la liste
    const competences = JSON.parse(localStorage.getItem('competences')) || [];
    competences.forEach((competence, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="flex-items">
                <span> <strong>Nom du compétence: </strong>${competence.nom} </span>
                <div>
                    <button id="modifier" onclick="modifierCompetence(${index})">Modifier</button>
                    <button id="supprimer" onclick="supprimerCompetence(${index})">Supprimer</button>
                </div>            
            </div>

            <ul>
                <li>
                    <strong>Niveau: </strong>${competence.niveau}
                    ${competence.description ? `<p><strong>Description: </strong> ${competence.description}</p>` : ""}
                </li>
            </ul>
        `;
        affichage.appendChild(li);
    });
}

// fonction pour ajouter une compétence
const ajouterCompetence = () => {
    const competences = JSON.parse(localStorage.getItem('competences')) || [];
    competences.push({
        nom: competenceName.value,
        niveau: choix.value,
        description: description.value
    });
    localStorage.setItem('competences', JSON.stringify(competences));
    afficherCompetences();
}

// fonction pour supprimer une compétence
const supprimerCompetence = (index) => {
    const competences = JSON.parse(localStorage.getItem('competences')) || [];
    competences.splice(index, 1);
    localStorage.setItem('competences', JSON.stringify(competences));
    afficherCompetences();
}

// fonction pour modifier une compétence
const modifierCompetence = (index) => {
    const competences = JSON.parse(localStorage.getItem('competences')) || [];
    const competence = competences[index];
    competenceName.value = competence.nom;
    choix.value = competence.niveau;
    description.value = competence.description;
    supprimerCompetence(index); 
}

// événement pour ajouter une compétence après validation
ajouter.addEventListener('click', e => {
    e.preventDefault();
    if (formValidation()) {
        ajouterCompetence();
        competenceName.value = "";
        choix.value = "";
        description.value = "";
    }
});


// chargement initial
window.onload = afficherCompetences