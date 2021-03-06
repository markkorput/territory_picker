(function() {
  describe('TerritoryPicker', function() {
    var options;
    options = {};
    beforeEach(function() {
      loadFixtures('fragment.html');
      return this.$element = $('#fixtures');
    });
    describe('initialization', function() {
      beforeEach(function() {
        return this.$element.territoryPicker();
      });
      describe('worldwide option', function() {
        it('should generate a \'worldwide?\' checkbox', function() {
          expect($('input#territory_world')).toExist();
          expect($('input#territory_world').prop('type')).toBe('checkbox');
          expect($('input#territory_world').prop('name')).toBe('territories[world]');
          return expect($('input#territory_world')).toBeChecked();
        });
        return it('should generate a \'worldwide\' label', function() {
          expect($('label#territory_world_name')).toExist();
          expect($('label#territory_world_name').prop('for')).toBe('territory_world');
          return expect($('label#territory_world_name').html()).toBe('World');
        });
      });
      return describe('default territory options', function() {
        return it('should generate these default options', function() {
          var territories,
            _this = this;
          territories = {
            africa: 'Africa',
            dz: "Algeria",
            ao: "Angola",
            bj: "Benin",
            bw: "Botswana",
            bf: "Burkina Faso",
            bi: "Burundi",
            cm: "Cameroon",
            cv: "Cape Verde",
            cf: "Central African Republic",
            td: "Chad",
            km: "Comoros",
            cg: "Congo",
            cd: "Congo (DR)",
            ci: "Cote d'Ivoire",
            dj: "Djibouti",
            eg: "Egypt",
            gq: "Equatorial Guinea",
            er: "Eritrea",
            et: "Ethiopia",
            ga: "Gabon",
            gm: "Gambia",
            gh: "Ghana",
            gn: "Guinea",
            gw: "Guinea-Bissau",
            ke: "Kenya",
            ls: "Lesotho",
            lr: "Liberia",
            ly: "Libyan Arab Jamahiriya",
            mg: "Madagascar",
            mw: "Malawi",
            ml: "Mali",
            mr: "Mauritania",
            mu: "Mauritius",
            yt: "Mayotte",
            ma: "Morocco",
            mz: "Mozambique",
            na: "Namibia",
            ne: "Niger",
            ng: "Nigeria",
            re: "Reunion",
            rw: "Rwanda",
            sh: "Saint Helena",
            st: "Sao Tome and Principe",
            sn: "Senegal",
            sc: "Seychelles",
            sl: "Sierra Leone",
            so: "Somalia",
            za: "South Africa",
            sd: "Sudan",
            sz: "Swaziland",
            tg: "Togo",
            tn: "Tunisia",
            ug: "Uganda",
            tz: "United Republic of Tanzania",
            eh: "Western Sahara",
            zm: "Zambia",
            zw: "Zimbabwe",
            americas: "Americas",
            ai: "Anguilla",
            ag: "Antigua and Barbuda",
            ar: "Argentina",
            aw: "Aruba",
            bs: "Bahamas",
            bb: "Barbados",
            bz: "Belize",
            bm: "Bermuda",
            bo: "Bolivia",
            br: "Brazil",
            vg: "British Virgin Islands",
            ca: "Canada",
            ky: "Cayman Islands",
            cl: "Chile",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            dm: "Dominica",
            "do": "Dominican Republic",
            ec: "Ecuador",
            sv: "El Salvador",
            fk: "Falkland Islands (Malvinas)",
            gf: "French Guiana",
            gl: "Greenland",
            gd: "Grenada",
            gp: "Guadeloupe",
            gt: "Guatemala",
            gy: "Guyana",
            ht: "Haiti",
            hn: "Honduras",
            jm: "Jamaica",
            mq: "Martinique",
            mx: "Mexico",
            ms: "Montserrat",
            an: "Netherlands Antilles",
            ni: "Nicaragua",
            pa: "Panama",
            py: "Paraguay",
            pe: "Peru",
            pr: "Puerto Rico",
            bl: "Saint Barthelemy",
            kn: "Saint Kitts and Nevis",
            lc: "Saint Lucia",
            mf: "Saint Martin",
            pm: "Saint Pierre and Miquelon",
            vc: "Saint Vincent and the Grenadines",
            sr: "Suriname",
            tt: "Trinidad and Tobago",
            tc: "Turks and Caicos Islands",
            vi: "United States Virgin Islands",
            us: "United States of America",
            uy: "Uruguay",
            ve: "Venezuela",
            asia: "Asia",
            af: "Afghanistan",
            am: "Armenia",
            az: "Azerbaijan",
            bh: "Bahrain",
            bd: "Bangladesh",
            bt: "Bhutan",
            bn: "Brunei Darussalam",
            kh: "Cambodia",
            cn: "China",
            ge: "Georgia",
            hk: "Hong Kong",
            "in": "India",
            id: "Indonesia",
            ir: "Iran (Islamic Republic of)",
            iq: "Iraq",
            il: "Israel",
            jp: "Japan",
            jo: "Jordan",
            kz: "Kazakhstan",
            kp: "Korea (DPRK)",
            kw: "Kuwait",
            kg: "Kyrgyzstan",
            la: "Laos (PDR)",
            lb: "Lebanon",
            mo: "Macao",
            my: "Malaysia",
            mv: "Maldives",
            mn: "Mongolia",
            mm: "Myanmar",
            np: "Nepal",
            ps: "Occupied Palestinian Territory",
            om: "Oman",
            pk: "Pakistan",
            ph: "Philippines",
            qa: "Qatar",
            kr: "Republic of Korea",
            sa: "Saudi Arabia",
            sg: "Singapore",
            lk: "Sri Lanka",
            sy: "Syrian Arab Republic",
            tw: "Taiwan",
            tj: "Tajikistan",
            th: "Thailand",
            tl: "Timor-Leste",
            tr: "Turkey",
            tm: "Turkmenistan",
            ae: "United Arab Emirates",
            uz: "Uzbekistan",
            vn: "Viet Nam",
            ye: "Yemen",
            oceania: "Oceania",
            as: "American Samoa",
            aq: "Antarctica",
            au: "Australia",
            bv: "Bouvet Island",
            io: "British Indian Ocean Territory",
            cx: "Christmas Island",
            cc: "Cocos (Keeling) Islands",
            ck: "Cook Islands",
            fj: "Fiji",
            pf: "French Polynesia",
            tf: "French Southern Territories",
            gu: "Guam",
            hm: "Heard and McDonald Islands",
            ki: "Kiribati",
            mh: "Marshall Islands",
            fm: "Micronesia",
            nr: "Nauru",
            nc: "New Caledonia",
            nz: "New Zealand",
            nu: "Niue",
            nf: "Norfolk Island",
            mp: "Northern Mariana Islands",
            pw: "Palau",
            pg: "Papua New Guinea",
            pn: "Pitcairn",
            ws: "Samoa",
            sb: "Solomon Islands",
            gs: "South Georgia and South Sandwich Islands",
            tk: "Tokelau",
            to: "Tonga",
            tv: "Tuvalu",
            um: "US Minor Outlying Islands",
            vu: "Vanuatu",
            wf: "Wallis and Futuna Islands",
            europe: "Europe",
            ax: "Aland Islands",
            al: "Albania",
            ad: "Andorra",
            at: "Austria",
            by: "Belarus",
            be: "Belgium",
            ba: "Bosnia and Herzegovina",
            bg: "Bulgaria",
            hr: "Croatia",
            cy: "Cyprus",
            cz: "Czech Republic",
            dk: "Denmark",
            ee: "Estonia",
            fo: "Faeroe Islands",
            fi: "Finland",
            fr: "France",
            de: "Germany",
            gi: "Gibraltar",
            gr: "Greece",
            gg: "Guernsey",
            va: "Holy See",
            hu: "Hungary",
            is: "Iceland",
            ie: "Ireland",
            im: "Isle Of Man",
            it: "Italy",
            je: "Jersey",
            lv: "Latvia",
            li: "Liechtenstein",
            lt: "Lithuania",
            lu: "Luxembourg",
            mk: "Macedonia (frm Yugoslavia)",
            mt: "Malta",
            mc: "Monaco",
            me: "Montenegro",
            nl: "Netherlands",
            no: "Norway",
            pl: "Poland",
            pt: "Portugal",
            md: "Republic of Moldova",
            ro: "Romania",
            ru: "Russian Federation",
            sm: "San Marino",
            rs: "Serbia",
            sk: "Slovakia",
            si: "Slovenia",
            es: "Spain",
            sj: "Svalbard and Jan Mayen Islands",
            se: "Sweden",
            ch: "Switzerland",
            ua: "Ukraine",
            gb: "United Kingdom of Great Britain"
          };
          return $.each(territories, function(code, label) {
            expect(_this.$element.find('input[name="territories[' + code + ']"]')).toBeChecked();
            return expect(_this.$element.find('label[for="territory_' + code + '"]').html()).toBe(label);
          });
        });
      });
    });
    describe('events', function() {
      beforeEach(function() {
        return this.$element.territoryPicker();
      });
      it('should auto check/uncheck all child territories', function() {
        expect(this.$element.find('input').length).toBe(252);
        expect(this.$element.find('input:checked').length).toBe(252);
        this.$element.find('input[name="territories[world]"]').trigger('click');
        expect(this.$element.find('input:checked').length).toBe(0);
        this.$element.find('input[name="territories[world]"]').trigger('click');
        return expect(this.$element.find('input:checked').length).toBe(252);
      });
      return it('should auto check/uncheck all parent territories', function() {
        expect(this.$element.find('input').length).toBe(252);
        expect(this.$element.find('input:checked').length).toBe(252);
        this.$element.find('input[name="territories[nl]"]').trigger('click');
        expect(this.$element.find('input:checked').length).toBe(249);
        this.$element.find('input[name="territories[nl]"]').trigger('click');
        return expect(this.$element.find('input:checked').length).toBe(252);
      });
    });
    describe('data interface', function() {
      beforeEach(function() {
        return this.$element.territoryPicker();
      });
      it('should have a all_checked_territory_codes function', function() {
        expect(this.$element.territoryPicker('all_checked_territory_codes').length).toEqual(252);
        this.$element.find('input[name="territories[world]"]').trigger('click');
        this.$element.find('input[name="territories[be]"]').trigger('click');
        return expect(this.$element.territoryPicker('all_checked_territory_codes')).toEqual(['be']);
      });
      return it('should have a checked_territory_codes function that doesn\'t gives all checked child-territories', function() {
        return expect(this.$element.territoryPicker('checked_territory_codes')).toEqual(['world']);
      });
    });
    describe('options', function() {
      it('should accept a `checked_territories` options which IS case-sensitive', function() {
        this.$element.territoryPicker({
          checked_territories: ['fr', 'NL']
        });
        return expect(this.$element.territoryPicker('all_checked_territory_codes')).toEqual(['fr']);
      });
      it('should accept a `checked_territories` options which IS case-sensitive', function() {
        this.$element.territoryPicker({
          checked_territories: ['fr', 'nl']
        });
        return expect(this.$element.territoryPicker('all_checked_territory_codes').sort()).toEqual(['fr', 'nl']);
      });
      it('should accept the `checked territories` option together with the `independent_subterritories` option', function() {
        this.$element.territoryPicker({
          independent_subterritories: true,
          checked_territories: ['fr', 'americas', 'nl']
        });
        return expect(this.$element.territoryPicker('all_checked_territory_codes').sort()).toEqual(['americas', 'fr', 'nl']);
      });
      it('should accept a territories options parameter', function() {
        this.$element.territoryPicker({
          territories: {
            world: {
              label: "World",
              territories: {
                BI: {
                  label: 'BIG country',
                  territories: {
                    b1: {
                      label: 'Big One'
                    },
                    b2: {
                      label: 'Big Two'
                    },
                    b3: {
                      label: 'Big Three'
                    }
                  }
                },
                sm: {
                  label: 'small country',
                  territories: {
                    s1: {
                      label: 'small one'
                    }
                  }
                }
              }
            }
          }
        });
        expect(this.$element.territoryPicker('all_checked_territory_codes')).toEqual(['world', 'BI', 'b1', 'b2', 'b3', 'sm', 's1']);
        this.$element.find('input[name="territories[world]"]').trigger('click');
        expect(this.$element.territoryPicker('all_checked_territory_codes')).toEqual([]);
        this.$element.find('input[name="territories[BI]"]').trigger('click');
        expect(this.$element.territoryPicker('all_checked_territory_codes')).toEqual(['BI', 'b1', 'b2', 'b3']);
        this.$element.find('input[name="territories[sm]"]').trigger('click');
        return expect(this.$element.territoryPicker('all_checked_territory_codes')).toEqual(['world', 'BI', 'b1', 'b2', 'b3', 'sm', 's1']);
      });
      return describe('sort_territories option', function() {
        it('should not sort by default', function() {
          this.$element.territoryPicker({
            territories: {
              world: {
                label: "World",
                territories: {
                  b: {
                    label: 'Second',
                    territories: {
                      b1: {
                        label: 'Second B'
                      },
                      b2: {
                        label: 'Second A'
                      },
                      b3: {
                        label: 'Second C'
                      }
                    }
                  },
                  a: {
                    label: 'First',
                    territories: {
                      a2: {
                        label: 'First Second'
                      },
                      a1: {
                        label: 'First first'
                      }
                    }
                  }
                }
              }
            }
          });
          expect(this.$element.territoryPicker('all_checked_territory_codes')).toEqual(['world', 'b', 'b1', 'b2', 'b3', 'a', 'a2', 'a1']);
          return expect(this.$element.find('label').text()).toEqual('WorldSecondSecond BSecond ASecond CFirstFirst SecondFirst first');
        });
        return it('should sort with sort_territories set to true', function() {
          this.$element.territoryPicker({
            sort_territories: true,
            territories: {
              world: {
                label: "World",
                territories: {
                  b: {
                    label: 'Second',
                    territories: {
                      b1: {
                        label: 'Second B'
                      },
                      b2: {
                        label: 'Second A'
                      },
                      b3: {
                        label: 'Second C'
                      }
                    }
                  },
                  a: {
                    label: 'First',
                    territories: {
                      a2: {
                        label: 'First B'
                      },
                      a1: {
                        label: 'First A'
                      }
                    }
                  }
                }
              }
            }
          });
          expect(this.$element.territoryPicker('all_checked_territory_codes')).toEqual(['world', 'a', 'a1', 'a2', 'b', 'b2', 'b1', 'b3']);
          return expect(this.$element.find('label').text()).toEqual('WorldFirstFirst AFirst BSecondSecond ASecond BSecond C');
        });
      });
    });
    return describe('`independent_subterritories` option', function() {
      it('should accept an `independent_subterritories` options which, when enabled, DISABLES auto checking/unchecking', function() {
        this.$element.territoryPicker({
          independent_subterritories: true
        });
        expect(this.$element.find('input:checked').length).toBe(252);
        this.$element.find('input[name="territories[world]"]').trigger('click');
        return expect(this.$element.find('input:checked').length).toBe(251);
      });
      it('should add check all/none links when `independent_subterritories` is enabled', function() {
        this.$element.territoryPicker({
          independent_subterritories: true
        });
        expect(this.$element.find('a#check_none_world').length).toBe(1);
        expect(this.$element.find('a#check_all_world').length).toBe(1);
        expect(this.$element.find('input:checked').length).toBe(252);
        this.$element.find('a#check_none_world').trigger('click');
        expect(this.$element.find('input:checked').length).toBe(1);
        this.$element.find('a#check_all_world').trigger('click');
        expect(this.$element.find('input:checked').length).toBe(252);
        this.$element.find('a#check_none_asia').trigger('click');
        expect(this.$element.find('input:checked').length).toBe(202);
        this.$element.find('a#check_all_asia').trigger('click');
        return expect(this.$element.find('input:checked').length).toBe(252);
      });
      return it('should NOT ad check all/none links when `independent_subterritories` is NOT enabled', function() {
        this.$element.territoryPicker();
        expect(this.$element.find('a#check_none_world').length).toBe(0);
        expect(this.$element.find('a#check_all_world').length).toBe(0);
        expect(this.$element.find('a.check_none').length).toBe(0);
        return expect(this.$element.find('a.check_all').length).toBe(0);
      });
    });
  });

}).call(this);
