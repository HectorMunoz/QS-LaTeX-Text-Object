define( [ "qlik" , 
	"https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.js" , 
	"css!https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/katex.css"
],
function ( qlik, katex, cssContent) {
	$( '<style>' ).html(cssContent).appendTo( 'head' );

	return {
		support : {
			snapshot: true,
			export: false,
			exportData : false
		},
		definition : {
			type : "items",
			component : "accordion",
			items: {
				settings: {
					uses: "settings",
					items: {
						MyTextarea: {
							label:"My formula",
							component: "textarea",
							rows: 7,				
							maxlength: 100, 		
							ref: "props.myTextarea"
						}
					}
				},
				SectionAbout:{
                    type: "items",
					label: "About",
					items:{
					About0: {
						label: "LaTeX Text Object v1.0",
						type: "string",
						component: "text",
						},							
					About: {
						label: 'GitHub',
						url: "https://github.com/HectorMunoz/QS-LaTeX-Text-Object",
						component: "link",
						},
					}
				}
			}
		},
		paint: function ($element, layout) {
		
			var formula = layout.props.myTextarea;
			
			var html = katex.renderToString(formula , {
				throwOnError: false
			});

			$element.html( html );
			return qlik.Promise.resolve();
		}
	};

} );

