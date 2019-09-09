import templates from './templates';
import colors from './colors';
import sizes from './sizes';


export default {
    yearRange: [1945, 2016],
    templates,
    colors,
    sizes,

    properties: {
        degree: {
            label: 'Derived materials',
            format: 'd'
        },
        formation_energy: {
            label: "Formation energy",
            filterAble: true,
            format: '.3f',
            suffix: ` eV/atom`
        },
        synthesis_probability: {
            label: "Synthesis probability",
            filterAble: true,
            format: '.1%'
        },
        eigen_cent: {
            label: 'Eigenvector centrality',
            filterAble: true,
        },
        deg_cent: {
            label: 'Degree centrality',
            filterAble: true,
        },
        shortest_path: {
            label: 'Shortest path'
        },
        deg_neigh: {
            label: 'Degree neighborhood'
        }
    },

    defaults: {
        template: templates[0],
        color: colors[1],
        zoom: -2.3,
        size: sizes[1],
        colorYear: 2016,
        year: 2016,
    },
}
