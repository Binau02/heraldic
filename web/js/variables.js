colors = [
  {
    "name": "argent",
    "color": "#FAFAFA",
    "type": "metal",
    "prefixe": "d'"
  },
  {
    "name": "or",
    "color": "#FFD700",
    "type": "metal",
    "prefixe": "d'"
  },
  {
    "name": "azur",
    "color": "#3200DC",
    "type": "couleur",
    "prefixe": "d'"
  },
  {
    "name": "gueules",
    "color": "#DC003C",
    "type": "couleur",
    "prefixe": "de"
  },
  {
    "name": "sinople",
    "color": "#008000",
    "type": "couleur",
    "prefixe": "de"
  },
  {
    "name": "sable",
    "color": "#111111",
    "type": "couleur",
    "prefixe": "de"
  },
  {
    "name": "pourpre",
    "color": "#9932CC",
    "type": "couleur",
    "prefixe": "de"
  },
  {
    "name": "orange",
    "color": "#FF8C00",
    "type": "couleur",
    "prefixe": "d'"
  },
  {
    "name": "carnassion",
    "color": "#FFB6C1",
    "type": "couleur",
    "prefixe": "de"
  },
  {
    "name": "vair",
    "color": [],
    "type": "fourrure",
    "prefixe": "de"
  },
  {
    "name": "contre vair",
    "color": [],
    "type": "fourrure",
    "prefixe": "de"
  },
  {
    "name": "hermine",
    "color": [],
    "type": "fourrure",
    "prefixe": "d'"
  },
  {
    "name": "contre hermine",
    "color": [],
    "type": "fourrure",
    "prefixe": "de"
  }
]

nombres = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze"]

colorsId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



meubles = {
  "abeille": {}, // F
  "ablette": {}, // long, F (poisson)

}

settingsData = {
  "part": {
    "émail": {
      "émail": colorsId
    },
    "motif": {
      "motif": {
        "palé": {
          "forme": ["de six pièces (défaut)", "de quatre pièces", "de huit pièces"]
        },
        "fascé": {
          "forme": ["de six pièces (défaut)", "de quatre pièces", "de huit pièces"]
        },
        "bandé": {
          "forme": ["de six pièces (défaut)", "de quatre pièces", "de huit pièces"]
        },
        "barré": {
          "forme": ["de six pièces (défaut)", "de quatre pièces", "de huit pièces"]
        },
        "chevronné": {
          "forme": ["de six pièces (défaut)", "de quatre pièces", "de huit pièces"]
        },
        "gironné": {
          "forme": ["de huit pièces (défaut)", "de six pièces", "mal gironné de six pièces", "de dix pièces", "mal gironné de dix pièces", "de douze pièces", "autre"]
        },
        "échiqueté": {
          "forme": ["de six traits (défaut)", "autre"]
        },
        "losangé": {
          "forme": ["de six traits (défaut)", "autre"]
        }
      },
      "émail 1": colorsId,
      "émail 2": colorsId
    },
    "partition": {
      "partition": {
        "parti": [],
        "coupé": [],
        "taillé": [],
        "tranché": [],
        "écartelé": [],
        "écartelé en sautoir": []
      }
    }
  },
  "pièce": {
    "pièce honorable": {
      "pièce": {
        "pal": {

        },
        "chef": {

        },
        "champagne": {

        }
      }
    },
    "meuble": {
      "meuble": meubles,
      "émail": colorsId,
      "nombre": [],
      "position": [
        "abîme", // (centre de l'écu)
        "abouté", // 3-4 (joint par le bout)
        "accolé" // 2- (collé, fusée/losange/macle)
      ]
    }
  }
}

grande_hermine = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0],
  [5, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 5],
  [5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 5, 5],
  [5, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

petite_hermine = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 5, 5, 0, 5, 5, 0, 5, 5, 0, 0],
  [0, 0, 5, 5, 0, 5, 5, 0, 5, 5, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0],
  [0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0],
  [0, 0, 5, 5, 0, 5, 5, 0, 5, 5, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 5, 5, 0, 0, 0, 0, 5, 5, 0, 5],
  [5, 0, 5, 5, 0, 0, 0, 0, 5, 5, 0, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 0, 5, 5, 0, 0, 0, 0, 5, 5, 0, 5],
  [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

grand_vair = [
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0],
  [0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0],
  [0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0],
  [0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2],
  [2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2],
  [2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2],
  [2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 0, 0, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]

petit_vair = [
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 0, 5, 2, 2, 5, 0, 0, 0],
  [0, 0, 5, 2, 2, 2, 2, 5, 0, 0],
  [0, 0, 5, 2, 2, 2, 2, 5, 0, 0],
  [0, 0, 5, 2, 2, 2, 2, 5, 0, 0],
  [0, 0, 5, 2, 2, 2, 2, 5, 0, 0],
  [0, 0, 5, 2, 2, 2, 2, 5, 0, 0],
  [0, 0, 5, 2, 2, 2, 2, 5, 0, 0],
  [0, 0, 5, 2, 2, 2, 2, 5, 0, 0],
  [0, 5, 2, 2, 2, 2, 2, 2, 5, 0],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [2, 5, 0, 0, 0, 0, 0, 0, 5, 2],
  [2, 2, 5, 0, 0, 0, 0, 5, 2, 2],
  [2, 2, 5, 0, 0, 0, 0, 5, 2, 2],
  [2, 2, 5, 0, 0, 0, 0, 5, 2, 2],
  [2, 2, 5, 0, 0, 0, 0, 5, 2, 2],
  [2, 2, 5, 0, 0, 0, 0, 5, 2, 2],
  [2, 2, 5, 0, 0, 0, 0, 5, 2, 2],
  [2, 2, 5, 0, 0, 0, 0, 5, 2, 2],
  [2, 2, 2, 5, 0, 0, 5, 2, 2, 2]
]

