const examplesData = [
  {
    name: 'A demonstration dataset (valid)',
    description: 'Contains an observation, sample, feature of interest and related vocabularies.',
    value: `PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX ex: <http://example.com/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX op: <https://linked.data.gov.au/def/observable-properties/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rc: <http://def.isotc211.org/iso19115/-1/2018/CitationAndResponsiblePartyInformation/code/CI_RoleCode/>
PREFIX sdo: <https://schema.org/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

ex:dataset-x
    a dcat:Dataset ;
    sdo:name "Dataset X" ;
    sdo:description "A demonstration dataset" ;
    sdo:dateCreated "2023-09-26"^^xsd:date ;
    sdo:dateModified "2023-09-27T14:30"^^xsd:dateTime ;
    prov:qualifiedAttribution [
        a prov:Attribution ;
        prov:agent ex:a-company ;
        prov:hadRole rc:originator ;
    ] ;
.

ex:obs-1
    a sosa:Observation ;
    sosa:usedProcedure <https://w3id.org/geochem/1.0/analyticalmethod/chromatographyanalysis> ;
    sosa:madeBySensor ex:sensor-c ;
    sosa:observedProperty <https://linked.data.gov.au/def/observable-properties/amount-of-gold> ;
    sosa:hasFeatureOfInterest ex:sample-d ;
    sosa:phenomenonTime "2023-05-11"^^xsd:date ;
    sosa:hasResult
        ex:result-e ,
        ex:result-f ;
.

ex:procedure-b
    a skos:Concept ;
    skos:prefLabel "Procedure B" ;
    skos:definition "A method for assessing the amount of gold in a sample" ;
.

ex:sensor-c
    a skos:Concept ;
    skos:prefLabel "Sensor C" ;
    skos:definition "A particular machine for assessing gold content in rock samples" ;
.

ex:sample-d
    a sosa:Sample ;
    sdo:name "Sample C" ;
    sdo:additionalType ex:soil-sample ;
    sdo:description "A soil sample from Sandy Creek" ;
    sdo:location "Zillmere Rock Store: Zone 4, Shelf N, Box 3" ;
    sosa:isSampleOf <https://linked.data.gov.au/dataset/qldgeofeatures/AnakieProvince> ;
.

ex:result-e
    sdo:value 0.027  ;
    sdo:unitCode <https://qudt.org/vocab/unit/PPM> ;
.

ex:result-f
    sdo:value 27.0 ;
    sdo:unitCode <https://qudt.org/vocab/unit/PPB> ;
.

<https://linked.data.gov.au/dataset/qldgeofeatures/AnakieProvince>
    a sosa:FeatureOfInterest , geo:Feature ;
    geo:hasGeometry [
        a geo:Geometry ;
        geo:asWKT "POLYGON((146.850699 -23.704934,146.850699 -20.863771,148.028386 -20.863771,148.028386 -23.704934,146.850699 -23.704934))"^^geo:wktLiteral ;
    ] ;
.`
  },
  {
    name: 'A demonstration dataset (invalid)',
    description:
      'Missing result and observable property in observation and qualified attribution in the dataset.',
    value: `# Dataset missing 1+ prov:qualifiedAttribution
#
# Observation missing 1 sosa:hasResult
#
# Observation refers to an unknown Observed Property value
#
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX ex: <http://example.com/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX op: <https://linked.data.gov.au/def/observable-properties/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX rc: <http://def.isotc211.org/iso19115/-1/2018/CitationAndResponsiblePartyInformation/code/CI_RoleCode/>
PREFIX sdo: <https://schema.org/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sosa: <http://www.w3.org/ns/sosa/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

ex:dataset-x
    a dcat:Dataset ;
    sdo:name "Dataset X" ;
    sdo:description "A demonstration dataset" ;
    sdo:dateCreated "2023-09-26"^^xsd:date ;
    sdo:dateModified "2023-09-27T14:30"^^xsd:dateTime ;
    # prov:qualifiedAttribution [
    #     a prov:Attribution ;
    #     prov:agent ex:a-company ;
    #     prov:hadRole rc:originator ;
    # ] ;
.

ex:obs-1
    a sosa:Observation ;
    sosa:usedProcedure <https://w3id.org/geochem/1.0/analyticalmethod/chromatographyanalysis> ;
    sosa:madeBySensor ex:sensor-c ;
    # sosa:observedProperty <http://unknown-vocab.org/amount-of-gold> ;
    sosa:hasFeatureOfInterest ex:sample-d ;
    sosa:phenomenonTime "2023-05-11"^^xsd:date ;
    # sosa:hasResult
    #     ex:result-e ,
    #     ex:result-f ;
.

ex:procedure-b
    a skos:Concept ;
    skos:prefLabel "Procedure B" ;
    skos:definition "A method for assessing the amount of gold in a sample" ;
.

ex:sensor-c
    a skos:Concept ;
    skos:prefLabel "Sensor C" ;
    skos:definition "A particular machine for assessing gold content in rock samples" ;
.

ex:sample-d
    a sosa:Sample ;
    sdo:name "Sample C" ;
    sdo:additionalType ex:soil-sample ;
    sdo:description "A soil sample from Sandy Creek" ;
    sdo:location "Zillmere Rock Store: Zone 4, Shelf N, Box 3" ;
    sosa:isSampleOf <https://linked.data.gov.au/dataset/qldgeofeatures/AnakieProvince> ;
.

ex:result-e
    sdo:value 0.027  ;
    sdo:unitCode <https://qudt.org/vocab/unit/PPM> ;
.

ex:result-f
    sdo:value 27.0 ;
    sdo:unitCode <https://qudt.org/vocab/unit/PPB> ;
.

<https://linked.data.gov.au/dataset/qldgeofeatures/AnakieProvince>
    a sosa:FeatureOfInterest , geo:Feature ;
    geo:hasGeometry [
        a geo:Geometry ;
        geo:asWKT "POLYGON((146.850699 -23.704934,146.850699 -20.863771,148.028386 -20.863771,148.028386 -23.704934,146.850699 -23.704934))"^^geo:wktLiteral ;
    ] ;
.`
  }
]

export default examplesData
