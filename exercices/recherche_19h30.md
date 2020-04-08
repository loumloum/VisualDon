ndjson-filter "d.title.toLowerCase().includes('féminis')" < segments.ndjson \ 
| ndjson-filter "d.date < '2020-01'" \
| ndjson-sort "a.date > b.date ? 1 : 1" \
| ndjson-map "{ month: d.date.split('-').filter((e, i) => i < 2).join('-'), duration: d.duration }" \
| node scriptes/sum duration month \
| node scriptes/graphDurationByMonth > graphique.json