// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const flatJson = [
  {
    'CDCC Function': 'BLK',
    SWModule: '%BLK3S',
    'Software component (SC)': 'Cluster 1',
    V1: 'Jeshan M',
    'V1 -RD/ICD responsibility': 'Yes',
  },
  {
    'CDCC Function': 'BLK',
    SWModule: '%BLKDUMMY1',
    'Software component (SC)': 'Cluster 1',
    V1: 'Jeshan M',
    'V1 -RD/ICD responsibility': 'Flexible',
  },
  {
    'CDCC Function': 'BLK',
    SWModule: '%BLK3S115',
    'Software component (SC)': 'Cluster 1',
    V1: 'Jeshan M',
    'V1 -RD/ICD responsibility': 'Yes',
  },
  {
    'CDCC Function': 'BLK',
    SWModule: '%BLK3S115',
    'Software component (SC)': 'Cluster 3',
    V1: 'Jeshan M',
    'V1 -RD/ICD responsibility': 'Yes',
  },
  {
    'CDCC Function': 'HMT',
    SWModule: '%BLK3S1156',
    'Software component (SC)': 'Cluster 1',
    V1: 'Jeshan M',
    'V1 -RD/ICD responsibility': 'Yes',
  },
  {
    'CDCC Function': 'HMT',
    SWModule: '%BLK3S11567',
    'Software component (SC)': 'Cluster 1',
    V1: 'Jeshan M',
    'V1 -RD/ICD responsibility': 'Yes',
  },
  {
    'CDCC Function': 'HMT',
    SWModule: '%BLK3S115678',
    'Software component (SC)': 'Cluster 3',
    V1: 'Jeshan M',
    'V1 -RD/ICD responsibility': 'Yes',
  },
  {
    'CDCC Function': 'AutoSar',
    SWModule: '%BLK3S115678',
    'Software component (SC)': 'Cluster 3',
    V1: 'Jeshan M',
    'V1 -RD/ICD responsibility': 'Yes',
  },
];

const CDD_FUN_KEY = 'CDCC Function';
const SC_KEY = 'Software component (SC)';
const SW_MODULE_KEY = 'SWModule';

const v1List = [];
const cddcFunList = [];
const scList = [];
const swModuleList = [];

function getUniqueV1() {
  flatJson.map((obj) => {
    if (!v1List.includes(obj.V1)) {
      v1List.push(obj.V1);
    }

    if (!cddcFunList.includes(obj[CDD_FUN_KEY])) {
      cddcFunList.push(obj[CDD_FUN_KEY]);
    }

    if (!scList.includes(obj[SC_KEY])) {
      scList.push(obj[SC_KEY]);
    }

    if (!swModuleList.includes(obj[SW_MODULE_KEY])) {
      swModuleList.push(obj[SW_MODULE_KEY]);
    }
  });

  console.log(v1List);
  console.log(cddcFunList);
  console.log(scList);
  console.log(swModuleList);
}

getUniqueV1();
constructJsonHierarchy();

function constructJsonHierarchy() {
  const mainObjs = [];

  v1List.map((v1) => {
    const v1Obj = {
      name: v1,
      children: [],
    };

    cddcFunList.map((cddFun) => {
      const cddFunObj = {
        name: cddFun,
        children: [],
      };
      v1Obj.children.push(cddFunObj);

      const list = getFilteredList(CDD_FUN_KEY, cddFun);
    });

    console.log(v1Obj);
  });
}

function getFilteredList(keyName, value) {
  return flatJson.filter((obj) => obj[keyName] === value);
}
