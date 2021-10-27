/* eslint-disable quotes */

const statisticsOperationsResponse = {
  operation: [
    {
      id: "C00010A",
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=C00010A",
      selfLink: {
        kind: "statisticalOperations#operation",
        href:
          "https://datos.canarias.es/api/estadisticas/api/operations/v1.0/operations/C00010A"
      },
      name: {
        text: [
          {
            value: "Sistema de Información Electoral en Canarias",
            lang: "es"
          }
        ]
      },
      kind: "statisticalOperations#operation"
    },
    {
      id: "C00016A",
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=C00016A",
      selfLink: {
        kind: "statisticalOperations#operation",
        href:
          "https://datos.canarias.es/api/estadisticas/api/operations/v1.0/operations/C00016A"
      },
      name: {
        text: [
          {
            value: "Estadística de Venta Mayor de Cemento",
            lang: "es"
          }
        ]
      },
      kind: "statisticalOperations#operation"
    },
    {
      id: "C00036A",
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=C00036A",
      selfLink: {
        kind: "statisticalOperations#operation",
        href:
          "https://datos.canarias.es/api/estadisticas/api/operations/v1.0/operations/C00036A"
      },
      name: {
        text: [
          {
            value:
              "Recopilación de Estadísticas sobre Donaciones y Trasplantes de Órganos",
            lang: "es"
          }
        ]
      },
      kind: "statisticalOperations#operation"
    }
  ],
  kind: "statisticalOperations#operations",
  total: 14,
  limit: 1000,
  offset: 0,
  selfLink:
    "https://datos.canarias.es/api/estadisticas/api/operations/v1.0/operations?orderBy=ID ASC&limit=1000&offset=0"
};

const cubesResponse = {
  dataset: [
    {
      id: "E30151A_000001",
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticalresources.Dataset=ISTAC:E30151A_000001(001.002)",
      selfLink: {
        kind: "statisticalResources#dataset",
        href:
          "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/E30151A_000001/001.002"
      },
      name: {
        text: [
          {
            value:
              "Sociedades mercantiles según naturaleza jurídica. Comunidades autónomas y provincias por meses",
            lang: "es"
          }
        ]
      },
      kind: "statisticalResources#dataset"
    },
    {
      id: "E30151A_000001",
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticalresources.Dataset=ISTAC:E30151A_000001(001.000)",
      selfLink: {
        kind: "statisticalResources#dataset",
        href:
          "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/E30151A_000001/001.000"
      },
      name: {
        text: [
          {
            value:
              "Sociedades mercantiles según naturaleza jurídica. Comunidades autónomas y provincias por meses",
            lang: "es"
          }
        ]
      },
      kind: "statisticalResources#dataset"
    },
    {
      id: "E30151A_000001",
      urn:
        "urn:siemac:org.siemac.metamac.infomodel.statisticalresources.Dataset=ISTAC:E30151A_000001(001.001)",
      selfLink: {
        kind: "statisticalResources#dataset",
        href:
          "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/E30151A_000001/001.001"
      },
      name: {
        text: [
          {
            value:
              "Sociedades mercantiles según naturaleza jurídica. Comunidades autónomas y provincias por meses",
            lang: "es"
          }
        ]
      },
      kind: "statisticalResources#dataset"
    }
  ],
  kind: "statisticalResources#datasets",
  total: 3,
  limit: 25,
  offset: 0,
  selfLink:
    'https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets?query=STATISTICAL_OPERATION_URN EQ "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation&E30151A"&limit=25&offset=0'
};

const dataResponse = {
    "id": "C00016A_000001",
    "urn": "urn:siemac:org.siemac.metamac.infomodel.statisticalresources.Dataset=ISTAC:C00016A_000001(1.5)",
    "selfLink": {
        "kind": "statisticalResources#dataset",
        "href": "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/1.5"
    },
    "parentLink": {
        "kind": "statisticalResources#datasets",
        "href": "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets"
    },
    "name": {
        "text": [
            {
                "value": "Ventas de cemento al por mayor por islas de Canarias y periodos",
                "lang": "es"
            }
        ]
    },
    "description": {
        "text": [
            {
                "value": "<font face=\"Arial, Verdana, sans-serif\"><span style=\"font-size: 11px;\">Datos mensuales de las ventas de cemento al por mayor, como indicador indirecto de la actividad de la construcción en Canarias, permitiendo su comparación por islas.</span></font>",
                "lang": "es"
            }
        ]
    },
    "selectedLanguages": {
        "language": [
            "es",
            "en"
        ],
        "total": 2
    },
    "metadata": {
        "replacesVersion": {
            "id": "C00016A_000001",
            "urn": "urn:siemac:org.siemac.metamac.infomodel.statisticalresources.Dataset=ISTAC:C00016A_000001(001.004)",
            "selfLink": {
                "kind": "statisticalResources#dataset",
                "href": "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/001.004"
            },
            "name": {
                "text": [
                    {
                        "value": "Ventas de cemento al por mayor por islas de Canarias y periodos",
                        "lang": "es"
                    }
                ]
            },
            "kind": "statisticalResources#dataset"
        },
        "isRequiredBy": {
            "resource": [
                {
                    "id": "C00016A_000001",
                    "urn": "urn:siemac:org.siemac.metamac.infomodel.statisticalresources.Query=ISTAC:C00016A_000001",
                    "selfLink": {
                        "kind": "statisticalResources#query",
                        "href": "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/queries/ISTAC/C00016A_000001"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Ventas de cemento al por mayor por islas de Canarias y periodos",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "statisticalResources#query"
                }
            ],
            "total": 1
        },
        "geographicCoverages": {
            "resource": [
                {
                    "id": "ES70",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES70"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Canary Islands",
                                "lang": "en"
                            },
                            {
                                "value": "Canarias",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "ES704",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES704",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES704"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Fuerteventura",
                                "lang": "es"
                            },
                            {
                                "value": "Fuerteventura",
                                "lang": "en"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "ES705",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES705",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES705"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Gran Canaria",
                                "lang": "en"
                            },
                            {
                                "value": "Gran Canaria",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "ES708",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES708",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES708"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Lanzarote",
                                "lang": "en"
                            },
                            {
                                "value": "Lanzarote",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "ES703",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES703",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES703"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "El Hierro",
                                "lang": "es"
                            },
                            {
                                "value": "El Hierro",
                                "lang": "en"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "ES706",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES706",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES706"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "La Gomera",
                                "lang": "en"
                            },
                            {
                                "value": "La Gomera",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "ES707",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES707",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES707"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "La Palma",
                                "lang": "es"
                            },
                            {
                                "value": "La Palma",
                                "lang": "en"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "ES709",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES709",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES709"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Tenerife",
                                "lang": "es"
                            },
                            {
                                "value": "Tenerife",
                                "lang": "en"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                }
            ],
            "total": 8
        },
        "temporalCoverages": {
            "item": [
                {
                    "id": "2019-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2019-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2019-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2019-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2019-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2019-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2019-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2019-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2019-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2019-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018",
                    "name": {
                        "text": [
                            {
                                "value": "2018",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2018-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2018-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017",
                    "name": {
                        "text": [
                            {
                                "value": "2017",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2017-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2017-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016",
                    "name": {
                        "text": [
                            {
                                "value": "2016",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2016-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2016-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015",
                    "name": {
                        "text": [
                            {
                                "value": "2015",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2015-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2015-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014",
                    "name": {
                        "text": [
                            {
                                "value": "2014",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2014-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2014-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013",
                    "name": {
                        "text": [
                            {
                                "value": "2013",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2013-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2013-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012",
                    "name": {
                        "text": [
                            {
                                "value": "2012",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2012-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2012-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011",
                    "name": {
                        "text": [
                            {
                                "value": "2011",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2011-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2011-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010",
                    "name": {
                        "text": [
                            {
                                "value": "2010",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2010-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2010-M01",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009",
                    "name": {
                        "text": [
                            {
                                "value": "2009",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M12",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M12",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M11",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M11",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M10",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M10",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M09",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M09",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M08",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M08",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M07",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M07",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M06",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M06",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M05",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M05",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M04",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M04",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M03",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M03",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M02",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M02",
                                "lang": "es"
                            }
                        ]
                    }
                },
                {
                    "id": "2009-M01",
                    "name": {
                        "text": [
                            {
                                "value": "2009-M01",
                                "lang": "es"
                            }
                        ]
                    }
                }
            ],
            "total": 139
        },
        "measureCoverages": {
            "resource": [
                {
                    "id": "VENTA_CEMENTO",
                    "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO",
                    "selfLink": {
                        "kind": "structuralResources#concept",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Venta de cemento",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#concept"
                },
                {
                    "id": "VENTA_CEMENTO_ACUMULADA",
                    "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO_ACUMULADA",
                    "selfLink": {
                        "kind": "structuralResources#concept",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO_ACUMULADA"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Venta de cemento acumulada",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#concept"
                },
                {
                    "id": "VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL",
                    "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL",
                    "selfLink": {
                        "kind": "structuralResources#concept",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Venta de cemento acumulada. Tasa de variación anual",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#concept"
                },
                {
                    "id": "VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL",
                    "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL",
                    "selfLink": {
                        "kind": "structuralResources#concept",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Venta de cemento acumulada. Variación anual",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#concept"
                },
                {
                    "id": "VENTA_CEMENTO__TASA_VARIACION_ANUAL",
                    "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO__TASA_VARIACION_ANUAL",
                    "selfLink": {
                        "kind": "structuralResources#concept",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO__TASA_VARIACION_ANUAL"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Venta de cemento. Tasa de variación anual",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#concept"
                },
                {
                    "id": "VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA",
                    "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA",
                    "selfLink": {
                        "kind": "structuralResources#concept",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Venta de cemento. Tasa de variación interperiódica",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#concept"
                },
                {
                    "id": "VENTA_CEMENTO__VARIACION_ANUAL",
                    "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO__VARIACION_ANUAL",
                    "selfLink": {
                        "kind": "structuralResources#concept",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO__VARIACION_ANUAL"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Venta de cemento. Variación anual",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#concept"
                },
                {
                    "id": "VENTA_CEMENTO__VARIACION_INTERPERIODICA",
                    "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO__VARIACION_INTERPERIODICA",
                    "selfLink": {
                        "kind": "structuralResources#concept",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO__VARIACION_INTERPERIODICA"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Venta de cemento. Variación interperiódica",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#concept"
                }
            ],
            "total": 8
        },
        "geographicGranularities": {
            "resource": [
                {
                    "id": "REGIONS",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.002).REGIONS",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.002/codes/REGIONS"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Comunidades autónomas",
                                "lang": "es"
                            },
                            {
                                "value": "Regions",
                                "lang": "en"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "ISLANDS",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.002).ISLANDS",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.002/codes/ISLANDS"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "ISLANDS",
                                "lang": "en"
                            },
                            {
                                "value": "Islas",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                }
            ],
            "total": 2
        },
        "temporalGranularities": {
            "resource": [
                {
                    "id": "M",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_FREQ(01.001).M",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_FREQ/01.001/codes/M"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Mensual",
                                "lang": "es"
                            },
                            {
                                "value": "Monthly",
                                "lang": "en"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                },
                {
                    "id": "A",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_FREQ(01.001).A",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_FREQ/01.001/codes/A"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Annual",
                                "lang": "en"
                            },
                            {
                                "value": "Anual",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                }
            ],
            "total": 2
        },
        "dateStart": "2009-01-01T00:00:00Z",
        "dateEnd": "2019-09-30T23:59:59.999+01:00",
        "relatedDsd": {
            "heading": {
                "dimensionId": [
                    "TIME_PERIOD"
                ],
                "total": 1
            },
            "stub": {
                "dimensionId": [
                    "MEDIDAS",
                    "TERRITORIO"
                ],
                "total": 2
            },
            "autoOpen": true,
            "showDecimals": 2,
            "id": "DSD_C00016A_00001",
            "urn": "urn:sdmx:org.sdmx.infomodel.datastructure.DataStructure=ISTAC:DSD_C00016A_00001(01.000)",
            "selfLink": {
                "kind": "structuralResources#dataStructure",
                "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/datastructures/ISTAC/DSD_C00016A_00001/01.000"
            },
            "name": {
                "text": [
                    {
                        "value": "Ventas de cemento al por mayor por islas de Canarias y periodos.",
                        "lang": "es"
                    }
                ]
            },
            "kind": "structuralResources#dataStructure"
        },
        "dimensions": {
            "dimension": [
                {
                    "id": "MEDIDAS",
                    "name": {
                        "text": [
                            {
                                "value": "Indicador",
                                "lang": "es"
                            },
                            {
                                "value": "Indicator",
                                "lang": "en"
                            }
                        ]
                    },
                    "type": "MEASURE_DIMENSION",
                    "dimensionValues": {
                        "value": [
                            {
                                "showDecimalsPrecision": 1,
                                "measureQuantity": {
                                    "unitCode": {
                                        "id": "T",
                                        "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_UNIDADES_MEDIDA(01.000).T",
                                        "selfLink": {
                                            "kind": "structuralResources#code",
                                            "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_UNIDADES_MEDIDA/01.000/codes/T"
                                        },
                                        "name": {
                                            "text": [
                                                {
                                                    "value": "Toneladas",
                                                    "lang": "es"
                                                },
                                                {
                                                    "value": "Tonne",
                                                    "lang": "en"
                                                }
                                            ]
                                        },
                                        "kind": "structuralResources#code"
                                    }
                                },
                                "id": "VENTA_CEMENTO",
                                "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO",
                                "selfLink": {
                                    "kind": "structuralResources#concept",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Venta de cemento",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#concept"
                            },
                            {
                                "showDecimalsPrecision": 1,
                                "measureQuantity": {
                                    "unitCode": {
                                        "id": "T",
                                        "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_UNIDADES_MEDIDA(01.000).T",
                                        "selfLink": {
                                            "kind": "structuralResources#code",
                                            "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_UNIDADES_MEDIDA/01.000/codes/T"
                                        },
                                        "name": {
                                            "text": [
                                                {
                                                    "value": "Toneladas",
                                                    "lang": "es"
                                                },
                                                {
                                                    "value": "Tonne",
                                                    "lang": "en"
                                                }
                                            ]
                                        },
                                        "kind": "structuralResources#code"
                                    }
                                },
                                "id": "VENTA_CEMENTO_ACUMULADA",
                                "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO_ACUMULADA",
                                "selfLink": {
                                    "kind": "structuralResources#concept",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO_ACUMULADA"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Venta de cemento acumulada",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#concept"
                            },
                            {
                                "showDecimalsPrecision": 2,
                                "measureQuantity": {
                                    "unitCode": {
                                        "id": "PORCENTAJE",
                                        "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_UNIDADES_MEDIDA(01.000).PORCENTAJE",
                                        "selfLink": {
                                            "kind": "structuralResources#code",
                                            "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_UNIDADES_MEDIDA/01.000/codes/PORCENTAJE"
                                        },
                                        "name": {
                                            "text": [
                                                {
                                                    "value": "Porcentaje",
                                                    "lang": "es"
                                                },
                                                {
                                                    "value": "Percentage",
                                                    "lang": "en"
                                                }
                                            ]
                                        },
                                        "kind": "structuralResources#code"
                                    }
                                },
                                "id": "VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL",
                                "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL",
                                "selfLink": {
                                    "kind": "structuralResources#concept",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Venta de cemento acumulada. Tasa de variación anual",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#concept"
                            },
                            {
                                "showDecimalsPrecision": 1,
                                "measureQuantity": {
                                    "unitCode": {
                                        "id": "T",
                                        "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_UNIDADES_MEDIDA(01.000).T",
                                        "selfLink": {
                                            "kind": "structuralResources#code",
                                            "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_UNIDADES_MEDIDA/01.000/codes/T"
                                        },
                                        "name": {
                                            "text": [
                                                {
                                                    "value": "Toneladas",
                                                    "lang": "es"
                                                },
                                                {
                                                    "value": "Tonne",
                                                    "lang": "en"
                                                }
                                            ]
                                        },
                                        "kind": "structuralResources#code"
                                    }
                                },
                                "id": "VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL",
                                "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL",
                                "selfLink": {
                                    "kind": "structuralResources#concept",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Venta de cemento acumulada. Variación anual",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#concept"
                            },
                            {
                                "showDecimalsPrecision": 2,
                                "measureQuantity": {
                                    "unitCode": {
                                        "id": "PORCENTAJE",
                                        "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_UNIDADES_MEDIDA(01.000).PORCENTAJE",
                                        "selfLink": {
                                            "kind": "structuralResources#code",
                                            "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_UNIDADES_MEDIDA/01.000/codes/PORCENTAJE"
                                        },
                                        "name": {
                                            "text": [
                                                {
                                                    "value": "Porcentaje",
                                                    "lang": "es"
                                                },
                                                {
                                                    "value": "Percentage",
                                                    "lang": "en"
                                                }
                                            ]
                                        },
                                        "kind": "structuralResources#code"
                                    }
                                },
                                "id": "VENTA_CEMENTO__TASA_VARIACION_ANUAL",
                                "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO__TASA_VARIACION_ANUAL",
                                "selfLink": {
                                    "kind": "structuralResources#concept",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO__TASA_VARIACION_ANUAL"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Venta de cemento. Tasa de variación anual",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#concept"
                            },
                            {
                                "showDecimalsPrecision": 2,
                                "measureQuantity": {
                                    "unitCode": {
                                        "id": "PORCENTAJE",
                                        "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_UNIDADES_MEDIDA(01.000).PORCENTAJE",
                                        "selfLink": {
                                            "kind": "structuralResources#code",
                                            "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_UNIDADES_MEDIDA/01.000/codes/PORCENTAJE"
                                        },
                                        "name": {
                                            "text": [
                                                {
                                                    "value": "Porcentaje",
                                                    "lang": "es"
                                                },
                                                {
                                                    "value": "Percentage",
                                                    "lang": "en"
                                                }
                                            ]
                                        },
                                        "kind": "structuralResources#code"
                                    }
                                },
                                "id": "VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA",
                                "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA",
                                "selfLink": {
                                    "kind": "structuralResources#concept",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Venta de cemento. Tasa de variación interperiódica",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#concept"
                            },
                            {
                                "showDecimalsPrecision": 1,
                                "measureQuantity": {
                                    "unitCode": {
                                        "id": "T",
                                        "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_UNIDADES_MEDIDA(01.000).T",
                                        "selfLink": {
                                            "kind": "structuralResources#code",
                                            "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_UNIDADES_MEDIDA/01.000/codes/T"
                                        },
                                        "name": {
                                            "text": [
                                                {
                                                    "value": "Toneladas",
                                                    "lang": "es"
                                                },
                                                {
                                                    "value": "Tonne",
                                                    "lang": "en"
                                                }
                                            ]
                                        },
                                        "kind": "structuralResources#code"
                                    }
                                },
                                "id": "VENTA_CEMENTO__VARIACION_ANUAL",
                                "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO__VARIACION_ANUAL",
                                "selfLink": {
                                    "kind": "structuralResources#concept",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO__VARIACION_ANUAL"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Venta de cemento. Variación anual",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#concept"
                            },
                            {
                                "showDecimalsPrecision": 1,
                                "measureQuantity": {
                                    "unitCode": {
                                        "id": "T",
                                        "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_UNIDADES_MEDIDA(01.000).T",
                                        "selfLink": {
                                            "kind": "structuralResources#code",
                                            "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_UNIDADES_MEDIDA/01.000/codes/T"
                                        },
                                        "name": {
                                            "text": [
                                                {
                                                    "value": "Toneladas",
                                                    "lang": "es"
                                                },
                                                {
                                                    "value": "Tonne",
                                                    "lang": "en"
                                                }
                                            ]
                                        },
                                        "kind": "structuralResources#code"
                                    }
                                },
                                "id": "VENTA_CEMENTO__VARIACION_INTERPERIODICA",
                                "urn": "urn:sdmx:org.sdmx.infomodel.conceptscheme.Concept=ISTAC:CSM_C00016A(01.000).VENTA_CEMENTO__VARIACION_INTERPERIODICA",
                                "selfLink": {
                                    "kind": "structuralResources#concept",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/conceptschemes/ISTAC/CSM_C00016A/01.000/concepts/VENTA_CEMENTO__VARIACION_INTERPERIODICA"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Venta de cemento. Variación interperiódica",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#concept"
                            }
                        ],
                        "total": 8
                    }
                },
                {
                    "id": "TERRITORIO",
                    "name": {
                        "text": [
                            {
                                "value": "Territorio",
                                "lang": "es"
                            },
                            {
                                "value": "Reference area",
                                "lang": "en"
                            }
                        ]
                    },
                    "type": "GEOGRAPHIC_DIMENSION",
                    "dimensionValues": {
                        "value": [
                            {
                                "variableElement": {
                                    "id": "CCAA_CANARIAS",
                                    "urn": "urn:siemac:org.siemac.metamac.infomodel.structuralresources.VariableElement=VR_TERRITORIO.CCAA_CANARIAS",
                                    "selfLink": {
                                        "kind": "structuralResources#variableElement",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/variables/VR_TERRITORIO/variableelements/CCAA_CANARIAS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "Canary Islands",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Canarias",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#variableElement"
                                },
                                "geographicGranularity": {
                                    "id": "REGIONS",
                                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.000).REGIONS",
                                    "selfLink": {
                                        "kind": "structuralResources#code",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.000/codes/REGIONS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "Regions",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Comunidades autónomas",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#code"
                                },
                                "open": true,
                                "id": "ES70",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES70"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Canary Islands",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "Canarias",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            },
                            {
                                "visualisationParent": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                                "variableElement": {
                                    "id": "ISLA_FUERTEVENTURA",
                                    "urn": "urn:siemac:org.siemac.metamac.infomodel.structuralresources.VariableElement=VR_TERRITORIO.ISLA_FUERTEVENTURA",
                                    "selfLink": {
                                        "kind": "structuralResources#variableElement",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/variables/VR_TERRITORIO/variableelements/ISLA_FUERTEVENTURA"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "Fuerteventura (Island)",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Fuerteventura (Isla)",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#variableElement"
                                },
                                "geographicGranularity": {
                                    "id": "ISLANDS",
                                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.000).ISLANDS",
                                    "selfLink": {
                                        "kind": "structuralResources#code",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.000/codes/ISLANDS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "ISLANDS",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Islas",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#code"
                                },
                                "open": true,
                                "id": "ES704",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES704",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES704"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Fuerteventura",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "Fuerteventura",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            },
                            {
                                "visualisationParent": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                                "variableElement": {
                                    "id": "ISLA_GRAN_CANARIA",
                                    "urn": "urn:siemac:org.siemac.metamac.infomodel.structuralresources.VariableElement=VR_TERRITORIO.ISLA_GRAN_CANARIA",
                                    "selfLink": {
                                        "kind": "structuralResources#variableElement",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/variables/VR_TERRITORIO/variableelements/ISLA_GRAN_CANARIA"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "Gran Canaria (Island)",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Gran Canaria (Isla)",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#variableElement"
                                },
                                "geographicGranularity": {
                                    "id": "ISLANDS",
                                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.000).ISLANDS",
                                    "selfLink": {
                                        "kind": "structuralResources#code",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.000/codes/ISLANDS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "ISLANDS",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Islas",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#code"
                                },
                                "open": true,
                                "id": "ES705",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES705",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES705"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Gran Canaria",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "Gran Canaria",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            },
                            {
                                "visualisationParent": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                                "variableElement": {
                                    "id": "ISLA_LANZAROTE",
                                    "urn": "urn:siemac:org.siemac.metamac.infomodel.structuralresources.VariableElement=VR_TERRITORIO.ISLA_LANZAROTE",
                                    "selfLink": {
                                        "kind": "structuralResources#variableElement",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/variables/VR_TERRITORIO/variableelements/ISLA_LANZAROTE"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "Lanzarote (Island)",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Lanzarote (Isla)",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#variableElement"
                                },
                                "geographicGranularity": {
                                    "id": "ISLANDS",
                                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.000).ISLANDS",
                                    "selfLink": {
                                        "kind": "structuralResources#code",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.000/codes/ISLANDS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "ISLANDS",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Islas",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#code"
                                },
                                "open": true,
                                "id": "ES708",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES708",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES708"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Lanzarote",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "Lanzarote",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            },
                            {
                                "visualisationParent": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                                "variableElement": {
                                    "id": "ISLA_HIERRO",
                                    "urn": "urn:siemac:org.siemac.metamac.infomodel.structuralresources.VariableElement=VR_TERRITORIO.ISLA_HIERRO",
                                    "selfLink": {
                                        "kind": "structuralResources#variableElement",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/variables/VR_TERRITORIO/variableelements/ISLA_HIERRO"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "El Hierro (Island)",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "El Hierro (Isla)",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#variableElement"
                                },
                                "geographicGranularity": {
                                    "id": "ISLANDS",
                                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.000).ISLANDS",
                                    "selfLink": {
                                        "kind": "structuralResources#code",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.000/codes/ISLANDS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "ISLANDS",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Islas",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#code"
                                },
                                "open": true,
                                "id": "ES703",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES703",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES703"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "El Hierro",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "El Hierro",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            },
                            {
                                "visualisationParent": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                                "variableElement": {
                                    "id": "ISLA_GOMERA",
                                    "urn": "urn:siemac:org.siemac.metamac.infomodel.structuralresources.VariableElement=VR_TERRITORIO.ISLA_GOMERA",
                                    "selfLink": {
                                        "kind": "structuralResources#variableElement",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/variables/VR_TERRITORIO/variableelements/ISLA_GOMERA"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "La Gomera (Island)",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "La Gomera (Isla)",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#variableElement"
                                },
                                "geographicGranularity": {
                                    "id": "ISLANDS",
                                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.000).ISLANDS",
                                    "selfLink": {
                                        "kind": "structuralResources#code",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.000/codes/ISLANDS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "ISLANDS",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Islas",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#code"
                                },
                                "open": true,
                                "id": "ES706",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES706",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES706"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "La Gomera",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "La Gomera",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            },
                            {
                                "visualisationParent": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                                "variableElement": {
                                    "id": "ISLA_LA_PALMA",
                                    "urn": "urn:siemac:org.siemac.metamac.infomodel.structuralresources.VariableElement=VR_TERRITORIO.ISLA_LA_PALMA",
                                    "selfLink": {
                                        "kind": "structuralResources#variableElement",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/variables/VR_TERRITORIO/variableelements/ISLA_LA_PALMA"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "La Palma (Island)",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "La Palma (Isla)",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#variableElement"
                                },
                                "geographicGranularity": {
                                    "id": "ISLANDS",
                                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.000).ISLANDS",
                                    "selfLink": {
                                        "kind": "structuralResources#code",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.000/codes/ISLANDS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "ISLANDS",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Islas",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#code"
                                },
                                "open": true,
                                "id": "ES707",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES707",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES707"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "La Palma",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "La Palma",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            },
                            {
                                "visualisationParent": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES70",
                                "variableElement": {
                                    "id": "ISLA_TENERIFE",
                                    "urn": "urn:siemac:org.siemac.metamac.infomodel.structuralresources.VariableElement=VR_TERRITORIO.ISLA_TENERIFE",
                                    "selfLink": {
                                        "kind": "structuralResources#variableElement",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/variables/VR_TERRITORIO/variableelements/ISLA_TENERIFE"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "Tenerife (Island)",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Tenerife (Isla)",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#variableElement"
                                },
                                "geographicGranularity": {
                                    "id": "ISLANDS",
                                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_GRANULARIDADES_GEOGRAFICAS(01.000).ISLANDS",
                                    "selfLink": {
                                        "kind": "structuralResources#code",
                                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_GRANULARIDADES_GEOGRAFICAS/01.000/codes/ISLANDS"
                                    },
                                    "name": {
                                        "text": [
                                            {
                                                "value": "ISLANDS",
                                                "lang": "en"
                                            },
                                            {
                                                "value": "Islas",
                                                "lang": "es"
                                            }
                                        ]
                                    },
                                    "kind": "structuralResources#code"
                                },
                                "open": true,
                                "id": "ES709",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_AREA_ES(02.000).ES709",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/ISTAC/CL_AREA_ES/02.000/codes/ES709"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Tenerife",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "Tenerife",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            }
                        ],
                        "total": 8
                    }
                },
                {
                    "id": "TIME_PERIOD",
                    "name": {
                        "text": [
                            {
                                "value": "Time period",
                                "lang": "en"
                            },
                            {
                                "value": "Periodo",
                                "lang": "es"
                            }
                        ]
                    },
                    "type": "TIME_DIMENSION",
                    "dimensionValues": {
                        "value": [
                            {
                                "id": "2019-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2019-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2019-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2019-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2019-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2019-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2019-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2019-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2019-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2019",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2019",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2018-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2018-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2018",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2018",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2017-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2017-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2017",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2017",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2016-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2016-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2016",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2016",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2015-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2015-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2015",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2015",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2014-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2014-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2014",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2014",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2013-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2013-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2013",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2013",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2012-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2012-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2012",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2012",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2011-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2011-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2011",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2011",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2010-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2010-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2010",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2010",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009",
                                "name": {
                                    "text": [
                                        {
                                            "value": "2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "YEARLY"
                            },
                            {
                                "id": "2009-M12",
                                "name": {
                                    "text": [
                                        {
                                            "value": "12/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "12/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M11",
                                "name": {
                                    "text": [
                                        {
                                            "value": "11/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "11/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M10",
                                "name": {
                                    "text": [
                                        {
                                            "value": "10/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "10/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M09",
                                "name": {
                                    "text": [
                                        {
                                            "value": "09/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "09/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M08",
                                "name": {
                                    "text": [
                                        {
                                            "value": "08/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "08/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M07",
                                "name": {
                                    "text": [
                                        {
                                            "value": "07/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "07/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M06",
                                "name": {
                                    "text": [
                                        {
                                            "value": "06/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "06/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M05",
                                "name": {
                                    "text": [
                                        {
                                            "value": "05/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "05/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M04",
                                "name": {
                                    "text": [
                                        {
                                            "value": "04/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "04/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M03",
                                "name": {
                                    "text": [
                                        {
                                            "value": "03/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "03/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M02",
                                "name": {
                                    "text": [
                                        {
                                            "value": "02/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "02/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            },
                            {
                                "id": "2009-M01",
                                "name": {
                                    "text": [
                                        {
                                            "value": "01/2009",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "01/2009",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "temporalGranularity": "MONTHLY"
                            }
                        ],
                        "total": 139
                    }
                }
            ],
            "total": 3
        },
        "attributes": {
            "attribute": [
                {
                    "id": "CONFIDENCIALIDAD_OBSERVACION",
                    "name": {
                        "text": [
                            {
                                "value": "Confidencialidad - estado",
                                "lang": "es"
                            },
                            {
                                "value": "Confidentiality - status",
                                "lang": "en"
                            }
                        ]
                    },
                    "attachmentLevel": "PRIMARY_MEASURE",
                    "type": "OTHER"
                },
                {
                    "id": "NOTAS_DATASET",
                    "name": {
                        "text": [
                            {
                                "value": "Annotation",
                                "lang": "en"
                            },
                            {
                                "value": "Anotación",
                                "lang": "es"
                            }
                        ]
                    },
                    "attachmentLevel": "DATASET",
                    "type": "OTHER"
                },
                {
                    "id": "ESTADO_OBSERVACION",
                    "name": {
                        "text": [
                            {
                                "value": "Observation status",
                                "lang": "en"
                            },
                            {
                                "value": "Estado de la observación",
                                "lang": "es"
                            }
                        ]
                    },
                    "attachmentLevel": "PRIMARY_MEASURE",
                    "attributeValues": {
                        "value": [
                            {
                                "id": "M",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=SDMX:CL_OBS_STATUS(2.1).M",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/SDMX/CL_OBS_STATUS/2.1/codes/M"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Missing value; data cannot exist",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "Valor no disponible; el dato no existe",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            },
                            {
                                "id": "O",
                                "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=SDMX:CL_OBS_STATUS(2.1).O",
                                "selfLink": {
                                    "kind": "structuralResources#code",
                                    "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/v1.0/codelists/SDMX/CL_OBS_STATUS/2.1/codes/O"
                                },
                                "name": {
                                    "text": [
                                        {
                                            "value": "Missing value",
                                            "lang": "en"
                                        },
                                        {
                                            "value": "Valor no disponible",
                                            "lang": "es"
                                        }
                                    ]
                                },
                                "kind": "structuralResources#code"
                            }
                        ],
                        "total": 2
                    },
                    "type": "OTHER"
                },
                {
                    "id": "NOTAS_OBSERVACION",
                    "name": {
                        "text": [
                            {
                                "value": "Annotation",
                                "lang": "en"
                            },
                            {
                                "value": "Anotación",
                                "lang": "es"
                            }
                        ]
                    },
                    "attachmentLevel": "PRIMARY_MEASURE",
                    "type": "OTHER"
                }
            ],
            "total": 4
        },
        "formatExtentObservations": 8896,
        "formatExtentDimensions": 3,
        "dateNextUpdate": "2019-11-20T12:00:00Z",
        "updateFrequency": {
            "id": "M",
            "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_FREQ(01.001).M",
            "selfLink": {
                "kind": "structuralResources#code",
                "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_FREQ/01.001/codes/M"
            },
            "name": {
                "text": [
                    {
                        "value": "Monthly",
                        "lang": "en"
                    },
                    {
                        "value": "Mensual",
                        "lang": "es"
                    }
                ]
            },
            "kind": "structuralResources#code"
        },
        "statisticOfficiality": {
            "id": "OFFICIAL",
            "name": {
                "text": [
                    {
                        "value": "Estadística oficial",
                        "lang": "es"
                    }
                ]
            }
        },
        "bibliographicCitation": {
            "text": [
                {
                    "value": "A05003423 (2019) Ventas de cemento al por mayor por islas de Canarias y periodos (v1.5) [dataset]. Instituto Canario de Estadística (ISTAC) (https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/1.5)",
                    "lang": "es"
                }
            ]
        },
        "keepAllData": true,
        "language": {
            "id": "es",
            "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_LANGUAGE_639_1(01.000).es",
            "selfLink": {
                "kind": "structuralResources#code",
                "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_LANGUAGE_639_1/01.000/codes/es"
            },
            "name": {
                "text": [
                    {
                        "value": "Español (o Castellano)",
                        "lang": "es"
                    },
                    {
                        "value": "Spanish; Castilian",
                        "lang": "en"
                    }
                ]
            },
            "kind": "structuralResources#code"
        },
        "languages": {
            "resource": [
                {
                    "id": "es",
                    "urn": "urn:sdmx:org.sdmx.infomodel.codelist.Code=ISTAC:CL_LANGUAGE_639_1(01.000).es",
                    "selfLink": {
                        "kind": "structuralResources#code",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/codelists/ISTAC/CL_LANGUAGE_639_1/01.000/codes/es"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Spanish; Castilian",
                                "lang": "en"
                            },
                            {
                                "value": "Español (o Castellano)",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#code"
                }
            ],
            "total": 1
        },
        "statisticalOperation": {
            "id": "C00016A",
            "urn": "urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=C00016A",
            "selfLink": {
                "kind": "statisticalOperations#operation",
                "href": "https://datos.canarias.es/api/estadisticas/api/operations/latest/operations/C00016A"
            },
            "name": {
                "text": [
                    {
                        "value": "Estadística de Venta Mayor de Cemento",
                        "lang": "es"
                    }
                ]
            },
            "kind": "statisticalOperations#operation"
        },
        "keywords": {
            "text": [
                {
                    "value": "cemento construcción ventas Canarias islas ",
                    "lang": "es"
                }
            ]
        },
        "type": "DATASET",
        "creator": {
            "id": "A05003423",
            "urn": "urn:sdmx:org.sdmx.infomodel.base.OrganisationUnit=ISTAC:GOBCAN(02.000).A05003423",
            "selfLink": {
                "kind": "structuralResources#organisationUnit",
                "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/organisationunitschemes/ISTAC/GOBCAN/02.000/organisationunits/A05003423"
            },
            "name": {
                "text": [
                    {
                        "value": "Instituto Canario de Estadística (ISTAC)",
                        "lang": "es"
                    }
                ]
            },
            "kind": "structuralResources#organisationUnit"
        },
        "contributors": {
            "resource": [
                {
                    "id": "A05003423",
                    "urn": "urn:sdmx:org.sdmx.infomodel.base.OrganisationUnit=ISTAC:GOBCAN(02.000).A05003423",
                    "selfLink": {
                        "kind": "structuralResources#organisationUnit",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/organisationunitschemes/ISTAC/GOBCAN/02.000/organisationunits/A05003423"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Instituto Canario de Estadística (ISTAC)",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#organisationUnit"
                }
            ],
            "total": 1
        },
        "lastUpdate": "2019-10-15T14:40:54.795+01:00",
        "publishers": {
            "resource": [
                {
                    "id": "A05003423",
                    "urn": "urn:sdmx:org.sdmx.infomodel.base.OrganisationUnit=ISTAC:GOBCAN(02.000).A05003423",
                    "selfLink": {
                        "kind": "structuralResources#organisationUnit",
                        "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/organisationunitschemes/ISTAC/GOBCAN/02.000/organisationunits/A05003423"
                    },
                    "name": {
                        "text": [
                            {
                                "value": "Instituto Canario de Estadística (ISTAC)",
                                "lang": "es"
                            }
                        ]
                    },
                    "kind": "structuralResources#organisationUnit"
                }
            ],
            "total": 1
        },
        "rightsHolder": {
            "id": "ISTAC",
            "nestedId": "ISTAC",
            "urn": "urn:sdmx:org.sdmx.infomodel.base.Agency=SDMX:AGENCIES(1.0).ISTAC",
            "selfLink": {
                "kind": "structuralResources#agency",
                "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/agencyschemes/SDMX/AGENCIES/1.0/agencies/ISTAC"
            },
            "name": {
                "text": [
                    {
                        "value": "Instituto Canario de Estadística (ISTAC)",
                        "lang": "es"
                    },
                    {
                        "value": "Canary Islands Statistics Institute (ISTAC)",
                        "lang": "en"
                    }
                ]
            },
            "kind": "structuralResources#agency"
        },
        "copyrightDate": 2019,
        "license": {
            "text": [
                {
                    "value": "<a href=\"http://www.gobiernodecanarias.org/istac/aviso_legal.html\">Aviso Legal</a>",
                    "lang": "es"
                }
            ]
        },
        "maintainer": {
            "id": "ISTAC",
            "nestedId": "ISTAC",
            "urn": "urn:sdmx:org.sdmx.infomodel.base.Agency=SDMX:AGENCIES(1.0).ISTAC",
            "selfLink": {
                "kind": "structuralResources#agency",
                "href": "https://datos.canarias.es/api/estadisticas/api/structural-resources/latest/agencyschemes/SDMX/AGENCIES/1.0/agencies/ISTAC"
            },
            "name": {
                "text": [
                    {
                        "value": "Canary Islands Statistics Institute (ISTAC)",
                        "lang": "en"
                    },
                    {
                        "value": "Instituto Canario de Estadística (ISTAC)",
                        "lang": "es"
                    }
                ]
            },
            "kind": "structuralResources#agency"
        },
        "version": "1.5",
        "versionRationaleTypes": {
            "versionRationaleType": [
                "MINOR_SERIES_UPDATE",
                "MINOR_OTHER"
            ],
            "total": 2
        },
        "versionRationale": {
            "text": [
                {
                    "value": "Se incorporan datos para el mes de septiembre a publicación.<div>Se corrige un dato de agosto para la isla de la Gomera, ante nuevo envío por parte de una de las empresas</div>",
                    "lang": "es"
                }
            ]
        },
        "validFrom": "2019-10-15T14:40:56.880+01:00",
        "nextVersion": "SCHEDULED_UPDATE"
    },
    "data": {
        "dimensions": {
            "dimension": [
                {
                    "dimensionId": "MEDIDAS",
                    "representations": {
                        "representation": [
                            {
                                "code": "VENTA_CEMENTO__TASA_VARIACION_ANUAL",
                                "index": 0
                            },
                            {
                                "code": "VENTA_CEMENTO__VARIACION_ANUAL",
                                "index": 1
                            },
                            {
                                "code": "VENTA_CEMENTO",
                                "index": 2
                            },
                            {
                                "code": "VENTA_CEMENTO__VARIACION_INTERPERIODICA",
                                "index": 3
                            },
                            {
                                "code": "VENTA_CEMENTO__TASA_VARIACION_INTERPERIODICA",
                                "index": 4
                            },
                            {
                                "code": "VENTA_CEMENTO_ACUMULADA__TASA_VARIACION_ANUAL",
                                "index": 5
                            },
                            {
                                "code": "VENTA_CEMENTO_ACUMULADA__VARIACION_ANUAL",
                                "index": 6
                            },
                            {
                                "code": "VENTA_CEMENTO_ACUMULADA",
                                "index": 7
                            }
                        ],
                        "total": 8
                    }
                },
                {
                    "dimensionId": "TERRITORIO",
                    "representations": {
                        "representation": [
                            {
                                "code": "ES704",
                                "index": 0
                            },
                            {
                                "code": "ES705",
                                "index": 1
                            },
                            {
                                "code": "ES708",
                                "index": 2
                            },
                            {
                                "code": "ES70",
                                "index": 3
                            },
                            {
                                "code": "ES706",
                                "index": 4
                            },
                            {
                                "code": "ES703",
                                "index": 5
                            },
                            {
                                "code": "ES707",
                                "index": 6
                            },
                            {
                                "code": "ES709",
                                "index": 7
                            }
                        ],
                        "total": 8
                    }
                },
                {
                    "dimensionId": "TIME_PERIOD",
                    "representations": {
                        "representation": [
                            {
                                "code": "2019-M09",
                                "index": 0
                            },
                            {
                                "code": "2019-M08",
                                "index": 1
                            },
                            {
                                "code": "2019-M07",
                                "index": 2
                            },
                            {
                                "code": "2019-M06",
                                "index": 3
                            },
                            {
                                "code": "2019-M05",
                                "index": 4
                            },
                            {
                                "code": "2019-M04",
                                "index": 5
                            },
                            {
                                "code": "2019-M03",
                                "index": 6
                            },
                            {
                                "code": "2019-M02",
                                "index": 7
                            },
                            {
                                "code": "2019-M01",
                                "index": 8
                            },
                            {
                                "code": "2018",
                                "index": 9
                            },
                            {
                                "code": "2018-M12",
                                "index": 10
                            },
                            {
                                "code": "2018-M11",
                                "index": 11
                            },
                            {
                                "code": "2018-M10",
                                "index": 12
                            },
                            {
                                "code": "2018-M09",
                                "index": 13
                            },
                            {
                                "code": "2018-M08",
                                "index": 14
                            },
                            {
                                "code": "2018-M07",
                                "index": 15
                            },
                            {
                                "code": "2018-M06",
                                "index": 16
                            },
                            {
                                "code": "2018-M05",
                                "index": 17
                            },
                            {
                                "code": "2018-M04",
                                "index": 18
                            },
                            {
                                "code": "2018-M03",
                                "index": 19
                            },
                            {
                                "code": "2018-M02",
                                "index": 20
                            },
                            {
                                "code": "2018-M01",
                                "index": 21
                            },
                            {
                                "code": "2017",
                                "index": 22
                            },
                            {
                                "code": "2017-M12",
                                "index": 23
                            },
                            {
                                "code": "2017-M11",
                                "index": 24
                            },
                            {
                                "code": "2017-M10",
                                "index": 25
                            },
                            {
                                "code": "2017-M09",
                                "index": 26
                            },
                            {
                                "code": "2017-M08",
                                "index": 27
                            },
                            {
                                "code": "2017-M07",
                                "index": 28
                            },
                            {
                                "code": "2017-M06",
                                "index": 29
                            },
                            {
                                "code": "2017-M05",
                                "index": 30
                            },
                            {
                                "code": "2017-M04",
                                "index": 31
                            },
                            {
                                "code": "2017-M03",
                                "index": 32
                            },
                            {
                                "code": "2017-M02",
                                "index": 33
                            },
                            {
                                "code": "2017-M01",
                                "index": 34
                            },
                            {
                                "code": "2016",
                                "index": 35
                            },
                            {
                                "code": "2016-M12",
                                "index": 36
                            },
                            {
                                "code": "2016-M11",
                                "index": 37
                            },
                            {
                                "code": "2016-M10",
                                "index": 38
                            },
                            {
                                "code": "2016-M09",
                                "index": 39
                            },
                            {
                                "code": "2016-M08",
                                "index": 40
                            },
                            {
                                "code": "2016-M07",
                                "index": 41
                            },
                            {
                                "code": "2016-M06",
                                "index": 42
                            },
                            {
                                "code": "2016-M05",
                                "index": 43
                            },
                            {
                                "code": "2016-M04",
                                "index": 44
                            },
                            {
                                "code": "2016-M03",
                                "index": 45
                            },
                            {
                                "code": "2016-M02",
                                "index": 46
                            },
                            {
                                "code": "2016-M01",
                                "index": 47
                            },
                            {
                                "code": "2015",
                                "index": 48
                            },
                            {
                                "code": "2015-M12",
                                "index": 49
                            },
                            {
                                "code": "2015-M11",
                                "index": 50
                            },
                            {
                                "code": "2015-M10",
                                "index": 51
                            },
                            {
                                "code": "2015-M09",
                                "index": 52
                            },
                            {
                                "code": "2015-M08",
                                "index": 53
                            },
                            {
                                "code": "2015-M07",
                                "index": 54
                            },
                            {
                                "code": "2015-M06",
                                "index": 55
                            },
                            {
                                "code": "2015-M05",
                                "index": 56
                            },
                            {
                                "code": "2015-M04",
                                "index": 57
                            },
                            {
                                "code": "2015-M03",
                                "index": 58
                            },
                            {
                                "code": "2015-M02",
                                "index": 59
                            },
                            {
                                "code": "2015-M01",
                                "index": 60
                            },
                            {
                                "code": "2014",
                                "index": 61
                            },
                            {
                                "code": "2014-M12",
                                "index": 62
                            },
                            {
                                "code": "2014-M11",
                                "index": 63
                            },
                            {
                                "code": "2014-M10",
                                "index": 64
                            },
                            {
                                "code": "2014-M09",
                                "index": 65
                            },
                            {
                                "code": "2014-M08",
                                "index": 66
                            },
                            {
                                "code": "2014-M07",
                                "index": 67
                            },
                            {
                                "code": "2014-M06",
                                "index": 68
                            },
                            {
                                "code": "2014-M05",
                                "index": 69
                            },
                            {
                                "code": "2014-M04",
                                "index": 70
                            },
                            {
                                "code": "2014-M03",
                                "index": 71
                            },
                            {
                                "code": "2014-M02",
                                "index": 72
                            },
                            {
                                "code": "2014-M01",
                                "index": 73
                            },
                            {
                                "code": "2013",
                                "index": 74
                            },
                            {
                                "code": "2013-M12",
                                "index": 75
                            },
                            {
                                "code": "2013-M11",
                                "index": 76
                            },
                            {
                                "code": "2013-M10",
                                "index": 77
                            },
                            {
                                "code": "2013-M09",
                                "index": 78
                            },
                            {
                                "code": "2013-M08",
                                "index": 79
                            },
                            {
                                "code": "2013-M07",
                                "index": 80
                            },
                            {
                                "code": "2013-M06",
                                "index": 81
                            },
                            {
                                "code": "2013-M05",
                                "index": 82
                            },
                            {
                                "code": "2013-M04",
                                "index": 83
                            },
                            {
                                "code": "2013-M03",
                                "index": 84
                            },
                            {
                                "code": "2013-M02",
                                "index": 85
                            },
                            {
                                "code": "2013-M01",
                                "index": 86
                            },
                            {
                                "code": "2012",
                                "index": 87
                            },
                            {
                                "code": "2012-M12",
                                "index": 88
                            },
                            {
                                "code": "2012-M11",
                                "index": 89
                            },
                            {
                                "code": "2012-M10",
                                "index": 90
                            },
                            {
                                "code": "2012-M09",
                                "index": 91
                            },
                            {
                                "code": "2012-M08",
                                "index": 92
                            },
                            {
                                "code": "2012-M07",
                                "index": 93
                            },
                            {
                                "code": "2012-M06",
                                "index": 94
                            },
                            {
                                "code": "2012-M05",
                                "index": 95
                            },
                            {
                                "code": "2012-M04",
                                "index": 96
                            },
                            {
                                "code": "2012-M03",
                                "index": 97
                            },
                            {
                                "code": "2012-M02",
                                "index": 98
                            },
                            {
                                "code": "2012-M01",
                                "index": 99
                            },
                            {
                                "code": "2011",
                                "index": 100
                            },
                            {
                                "code": "2011-M12",
                                "index": 101
                            },
                            {
                                "code": "2011-M11",
                                "index": 102
                            },
                            {
                                "code": "2011-M10",
                                "index": 103
                            },
                            {
                                "code": "2011-M09",
                                "index": 104
                            },
                            {
                                "code": "2011-M08",
                                "index": 105
                            },
                            {
                                "code": "2011-M07",
                                "index": 106
                            },
                            {
                                "code": "2011-M06",
                                "index": 107
                            },
                            {
                                "code": "2011-M05",
                                "index": 108
                            },
                            {
                                "code": "2011-M04",
                                "index": 109
                            },
                            {
                                "code": "2011-M03",
                                "index": 110
                            },
                            {
                                "code": "2011-M02",
                                "index": 111
                            },
                            {
                                "code": "2011-M01",
                                "index": 112
                            },
                            {
                                "code": "2010",
                                "index": 113
                            },
                            {
                                "code": "2010-M12",
                                "index": 114
                            },
                            {
                                "code": "2010-M11",
                                "index": 115
                            },
                            {
                                "code": "2010-M10",
                                "index": 116
                            },
                            {
                                "code": "2010-M09",
                                "index": 117
                            },
                            {
                                "code": "2010-M08",
                                "index": 118
                            },
                            {
                                "code": "2010-M07",
                                "index": 119
                            },
                            {
                                "code": "2010-M06",
                                "index": 120
                            },
                            {
                                "code": "2010-M05",
                                "index": 121
                            },
                            {
                                "code": "2010-M04",
                                "index": 122
                            },
                            {
                                "code": "2010-M03",
                                "index": 123
                            },
                            {
                                "code": "2010-M02",
                                "index": 124
                            },
                            {
                                "code": "2010-M01",
                                "index": 125
                            },
                            {
                                "code": "2009",
                                "index": 126
                            },
                            {
                                "code": "2009-M12",
                                "index": 127
                            },
                            {
                                "code": "2009-M11",
                                "index": 128
                            },
                            {
                                "code": "2009-M10",
                                "index": 129
                            },
                            {
                                "code": "2009-M09",
                                "index": 130
                            },
                            {
                                "code": "2009-M08",
                                "index": 131
                            },
                            {
                                "code": "2009-M07",
                                "index": 132
                            },
                            {
                                "code": "2009-M06",
                                "index": 133
                            },
                            {
                                "code": "2009-M05",
                                "index": 134
                            },
                            {
                                "code": "2009-M04",
                                "index": 135
                            },
                            {
                                "code": "2009-M03",
                                "index": 136
                            },
                            {
                                "code": "2009-M02",
                                "index": 137
                            },
                            {
                                "code": "2009-M01",
                                "index": 138
                            }
                        ],
                        "total": 139
                    }
                }
            ],
            "total": 3
        },
        "attributes": {
            "attribute": [
                {
                    "value": " |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | O | O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | O | O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | O | O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | O | O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | O | O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | O | O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | O | O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  | O | O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  |  |  |  | M |  |  |  |  |  |  |  |  |  | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | M | M | M | M | M | M | M | M | M | M | M | M | M",
                    "id": "ESTADO_OBSERVACION"
                }
            ],
            "total": 1
        },
        "observations": "-7.61 | -4.38 | -16.6 | -27.67 | -16.95 | -24.44 | -33.93 | -1.92 | 6.02 | 33.33 | 18.66 | 28.88 | 43.76 | 31.07 | 15.18 | 47.38 | 29.67 | 29.25 | 69.41 | 40.03 | 37.94 | 12.28 | 22.17 | 12.27 | -1.76 | -17.91 | -3.8 | 45 | 92.25 | 56.03 | 76.2 | 3.43 | 26.14 | 1.59 | 51.56 | -3.08 | -7.77 | 27.28 | 17.81"
    },
    "kind": "statisticalResources#dataset"
};

const notFound = {
  code: "exception.statistical_resources.dataset.not_found",
  message:
    "Dataset C00016A_0000331 not found in version ~latest from Agency ISTAC",
  parameters: {
    parameter: ["C00016A_0000331", "~latest", "ISTAC"],
    total: 3
  }
};

const metadataResponse = {
    "property": [
        {
            "key": "metamac.statistical_operations.rest.external",
            "value": "https://datos.canarias.es/api/estadisticas/api/operations",
            "kind": "commonMetadata#property"
        },
        {
            "key": "metamac.statistical_resources.rest.external",
            "value": "https://datos.canarias.es/api/estadisticas/api/statistical-resources",
            "kind": "commonMetadata#property"
        }
    ]
  };

const responses = {
  "https://datos.canarias.es/api/estadisticas/api/operations/v1.0/operations.json?query=STATUS%20EQ%20%22PRODUCTION%22&limit=1000&orderBy=ID%20ASC": statisticsOperationsResponse,
  "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets.json?limit=1000&orderBy=ID%20ASC&query=STATISTICAL_OPERATION_URN%20EQ%20%22urn:siemac:org.siemac.metamac.infomodel.statisticaloperations.Operation=E30151A%22": cubesResponse,
  "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000001/~latest.json": dataResponse,
  "https://datos.canarias.es/api/estadisticas/api/statistical-resources/v1.0/datasets/ISTAC/C00016A_000002/~latest.json": notFound,
  "https://datos.canarias.es/api/estadisticas/api/cmetadata/v1.0/properties.json": metadataResponse


};


/* global exports */
/* istanbul ignore next */
if (typeof exports !== "undefined") {
  exports["__esModule"] = true;
  exports["default"] = responses;
}

;