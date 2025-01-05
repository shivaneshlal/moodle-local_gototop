// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

define(['core/templates'], (templates) => {
    return {
        init: () => {
            templates.render('local_gototop/gototop', {}).done((html, js) => {
                document.body.insertAdjacentHTML('beforeend', html);
                templates.runTemplateJS(js);

                const button = document.getElementById('gototop');

                window.addEventListener('scroll', () => {
                    if (window.scrollY > 100) {
                        button.style.display = 'block';
                    } else {
                        button.style.display = 'none';
                    }
                });

                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });

                const adjustButtonPosition = () => {
                    const drawer = document.getElementById('theme_boost-drawers-blocks');
                    if (drawer.classList.contains('show')) {
                        button.style.right = 'calc(20px + 315px + 0.8rem)'; // Adjust based on drawer width
                    } else {
                        button.style.right = '20px';
                    }
                };

                document.getElementById('theme_boost-drawers-blocks').addEventListener('transitionend', adjustButtonPosition);
                window.addEventListener('resize', adjustButtonPosition);
                adjustButtonPosition(); // Initial adjustment
            });
        }
    };
});