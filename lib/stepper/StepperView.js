import React from 'react';
import { View, ScrollView } from 'react-native';

/**
 * <StepperView />
 */
function StepperView(props, s) {
    const childrenAsArray = typeof props.children.map === 'function' ?
            props.children :
            React.Children.toArray(props.children);

    return (
        <ScrollView
            horizontal
            pagingEnabled
            onScrollBeginDrag={props.handleScrollStart}
            onScrollEndDrag={props.handleScrollEnd}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            style={s('ScrollContent')}
            contentContainerStyle={s('ScrollContent')}
            ref={props.attachScrollView}
        >
            {childrenAsArray.map((Child, index) => (
                <View
                    key={index}
                    style={s('Item')}
                >
                    {React.cloneElement(Child, {
                        addAnimation: component => props.handleAddAnimationComponentForIndex(index, component)
                    })}
                </View>
            ))}
        </ScrollView>
    );
}

StepperView.propTypes = {};

export default StepperView;