var React = require('react');
var Component = require('./Component.jsx');

var datas = [{"id":1, "data":"1"}, {"id":2, "data":"2"},{"id":3, "data":"3"}];

var Manager = React.createClass({
    render: function(){
        var items = datas.map(function(item){
            return <ListItem key={item.id} text={item.text} />;
        });
        
        return (<ul>{items}</ul>);
    }
});

module.exports = Manager;
